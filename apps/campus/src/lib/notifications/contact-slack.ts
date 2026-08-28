/**
 * お問い合わせフォームの Slack 通知
 *
 * 送信先は SLACK_CONTACT_WEBHOOK（お問い合わせ通知用チャンネルの Incoming Webhook）。
 * 未設定時は通知をスキップする。通知の失敗はフォーム送信自体を失敗させない
 * （メール送信は別経路で行っており、通知はあくまで気づくための補助のため）。
 */

const TIMEOUT_MS = 5000

/** Slack section ブロックの上限は 3000 文字。エスケープで膨らむ分の余裕を持たせる */
const MAX_TEXT = 2900
const MAX_MESSAGE = 1000
const MAX_INLINE = 200

export type ContactNotificationInput = {
  typeLabel: string
  name: string
  email: string
  university?: string
  grade?: string
  message: string
}

/** Slack mrkdwn の仕様上エスケープが必須の 3 文字を変換する */
function escapeSlackText(input: string): string {
  return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * 先に元の文字列を切り詰め、エスケープ後にもう一度上限で clamp する。
 * エスケープは 1 文字を最大 5 文字（`&` → `&amp;`）に膨らませるため、
 * 切り詰めだけを先に行うと section の上限を超え、通知が丸ごと落ちる。
 */
function truncateForSlack(input: string, rawMax: number, escapedMax: number): string {
  return escapeSlackText(input.slice(0, rawMax)).slice(0, escapedMax)
}

/** 1 行に埋め込む値から、レイアウトを壊す改行を除去する */
function escapeInline(input: string): string {
  return truncateForSlack(input.replace(/[\r\n]/g, ' '), MAX_INLINE, MAX_TEXT)
}

export function buildContactSlackPayload(input: ContactNotificationInput): object {
  const env = process.env.VERCEL_ENV ?? 'local'
  const headerText = `お問い合わせ | ${input.typeLabel}`
  const message = truncateForSlack(input.message, MAX_MESSAGE, MAX_TEXT)
  const email = escapeInline(input.email)

  const detailLines = [
    `*氏名:* ${escapeInline(input.name)}`,
    // Slack のリンク記法。通知から 1 クリックで返信メールを開けるようにする
    `*メール:* <mailto:${email}|${email}>`,
  ]
  if (input.university) detailLines.push(`*大学名:* ${escapeInline(input.university)}`)
  if (input.grade) detailLines.push(`*学年:* ${escapeInline(input.grade)}`)
  detailLines.push(`*環境:* ${env}`)

  return {
    text: `:email: ${headerText} ${message}`.slice(0, MAX_TEXT),
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: `:email: ${headerText}`, emoji: true },
      },
      { type: 'section', text: { type: 'mrkdwn', text: detailLines.join('\n') } },
      { type: 'section', text: { type: 'mrkdwn', text: `*お問い合わせ内容:*\n${message}` } },
    ],
  }
}

export async function notifyContactToSlack(input: ContactNotificationInput): Promise<void> {
  const webhook = process.env.SLACK_CONTACT_WEBHOOK
  if (!webhook) return

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(buildContactSlackPayload(input)),
      signal: controller.signal,
    })
    if (!res.ok) {
      console.error('Slack notification failed', { status: res.status })
    }
  } catch (err) {
    // Webhook URL が例外メッセージに含まれうるため、内容はログに出さない
    console.error('Slack notification error', {
      name: err instanceof Error ? err.name : 'unknown',
    })
  } finally {
    clearTimeout(timer)
  }
}
