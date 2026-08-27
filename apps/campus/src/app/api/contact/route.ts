import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { notifyContactToSlack } from '@/lib/notifications/contact-slack'

// FROM は Resend で認証済みのドメイン（auth.cabuild.jp）である必要がある
const FROM = 'CABUILDキャンパス <noreply@auth.cabuild.jp>'
// 運営窓口の Google グループ（共同トレイ）。返信は学生の replyTo 宛に行える
const ADMIN_TO = 'campus-support@nin-japan.com'

const contactTypeLabels: Record<string, string> = {
  student_service: '学生：サービスについて',
  student_account: '学生：アカウント・登録について',
  student_technical: '学生：技術的な問題について',
  org_introduction: '大学関係者・企業：サービス導入について',
  other: 'その他',
}

const studentTypes = new Set(['student_service', 'student_account', 'student_technical'])

type ContactBody = {
  name?: string
  email?: string
  contactType?: string
  university?: string
  grade?: string
  message?: string
}

export async function POST(req: Request) {
  let body: ContactBody
  try {
    body = (await req.json()) as ContactBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const contactType = body.contactType?.trim()
  const message = body.message?.trim()
  const university = body.university?.trim()
  const grade = body.grade?.trim()

  if (!name || !email || !contactType || !message) {
    return NextResponse.json({ error: '必須項目が入力されていません' }, { status: 400 })
  }

  if (!contactTypeLabels[contactType]) {
    return NextResponse.json({ error: '不正なお問い合わせ種別です' }, { status: 400 })
  }

  if (studentTypes.has(contactType) && (!university || !grade)) {
    return NextResponse.json({ error: '大学名と学年を入力してください' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'メール送信が設定されていません' }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const typeLabel = contactTypeLabels[contactType]

  const adminTextLines = [
    'CABUILDキャンパスのお問い合わせフォームから新しい問い合わせがありました。',
    '',
    `お問い合わせ種別：${typeLabel}`,
    `氏名：${name}`,
    `メールアドレス：${email}`,
  ]
  if (studentTypes.has(contactType)) {
    adminTextLines.push(`大学名：${university}`)
    adminTextLines.push(`学年：${grade}`)
  }
  adminTextLines.push('', 'お問い合わせ内容：', message)

  const userTextLines = [
    `${name} 様`,
    '',
    'CABUILDキャンパスへのお問い合わせありがとうございます。',
    '以下の内容で受け付けました。担当者より順次ご連絡いたします。',
    '',
    `お問い合わせ種別：${typeLabel}`,
  ]
  if (studentTypes.has(contactType)) {
    userTextLines.push(`大学名：${university}`)
    userTextLines.push(`学年：${grade}`)
  }
  userTextLines.push(
    '',
    'お問い合わせ内容：',
    message,
    '',
    '※本メールは自動返信です。このメールに返信いただいてもお答えできかねますのでご了承ください。',
    '',
    'NINJAPAN株式会社（ODKソリューションズグループ）',
    'CABUILDキャンパス'
  )

  // Slack 通知はメール送信と並行して行う。メールが失敗しても問い合わせ内容が
  // Slack に残るよう、メールの成否に依存させない（内部で例外を捕捉するため throw しない）
  const slackNotified = notifyContactToSlack({
    typeLabel,
    name,
    email,
    university: studentTypes.has(contactType) ? university : undefined,
    grade: studentTypes.has(contactType) ? grade : undefined,
    message,
  })

  let mailFailed = false
  try {
    const [adminResult, userResult] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: ADMIN_TO,
        replyTo: email,
        subject: `【CABUILDキャンパス】お問い合わせ：${typeLabel}`,
        text: adminTextLines.join('\n'),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: '【CABUILDキャンパス】お問い合わせを受け付けました',
        text: userTextLines.join('\n'),
      }),
    ])

    if (adminResult.error || userResult.error) {
      console.error('Resend error', { admin: adminResult.error, user: userResult.error })
      mailFailed = true
    }
  } catch (err) {
    console.error('Contact form error', err)
    mailFailed = true
  }

  await slackNotified

  if (mailFailed) {
    return NextResponse.json({ error: 'メール送信に失敗しました' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
