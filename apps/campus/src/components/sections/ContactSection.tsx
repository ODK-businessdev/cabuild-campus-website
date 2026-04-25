'use client'

import { useState } from 'react'

type ContactType =
  | 'student_service'
  | 'student_account'
  | 'student_technical'
  | 'org_introduction'
  | 'other'
  | ''

const contactTypeOptions: { value: ContactType; label: string }[] = [
  { value: 'student_service', label: '学生：サービスについて' },
  { value: 'student_account', label: '学生：アカウント・登録について' },
  { value: 'student_technical', label: '学生：技術的な問題について' },
  { value: 'org_introduction', label: '大学関係者・企業：サービス導入について' },
  { value: 'other', label: 'その他' },
]

const isStudentType = (type: ContactType) =>
  type === 'student_service' || type === 'student_account' || type === 'student_technical'

const CONTACT_API = '/campus/api/contact'

export default function ContactSection() {
  const [contactType, setContactType] = useState<ContactType>('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting) return

    const formEl = e.currentTarget
    const formData = new FormData(formEl)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      contactType: String(formData.get('contactType') ?? ''),
      university: String(formData.get('university') ?? ''),
      grade: String(formData.get('grade') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    setSubmitting(true)
    setErrorMessage(null)

    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? '送信に失敗しました')
      }
      setSubmitted(true)
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : '送信に失敗しました')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            お問い合わせ
          </h2>
          <p className="text-base text-[#4a4a4a] leading-relaxed">
            ご質問やご要望はこちらからどうぞ。
          </p>
        </div>

        {submitted ? (
          /* 送信完了メッセージ */
          <div className="rounded-xl bg-[#f3f9e8] border border-[#b8d97e] p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#8fc23f] flex items-center justify-center mx-auto mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-base font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              送信しました
            </p>
            <p className="text-sm text-[#4a4a4a]">
              ご入力いただいたメールアドレスに自動返信メールをお送りしました。担当者より順次ご連絡いたします。
            </p>
          </div>
        ) : (
          /* フォーム */
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* 氏名 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#1a1a1a]">
                氏名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="山田 太郎"
                className="h-11 px-4 rounded border border-[#e5e5e5] text-sm text-[#1a1a1a] placeholder:text-[#808080] focus:outline-none focus:border-[#299dd9] transition-colors"
              />
            </div>

            {/* メールアドレス */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#1a1a1a]">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@email.com"
                className="h-11 px-4 rounded border border-[#e5e5e5] text-sm text-[#1a1a1a] placeholder:text-[#808080] focus:outline-none focus:border-[#299dd9] transition-colors"
              />
            </div>

            {/* お問い合わせ種別 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#1a1a1a]">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="contactType"
                  required
                  value={contactType}
                  onChange={(e) => setContactType(e.target.value as ContactType)}
                  className="w-full h-11 pl-4 pr-10 rounded border border-[#e5e5e5] text-sm text-[#1a1a1a] bg-white focus:outline-none focus:border-[#299dd9] transition-colors appearance-none"
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  {contactTypeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#808080]"
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            {/* 学生選択時のみ表示 */}
            {isStudentType(contactType) && (
              <>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1a1a1a]">
                    大学名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="university"
                    required
                    placeholder="〇〇大学"
                    className="h-11 px-4 rounded border border-[#e5e5e5] text-sm text-[#1a1a1a] placeholder:text-[#808080] focus:outline-none focus:border-[#299dd9] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1a1a1a]">
                    学年 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="grade"
                      required
                      defaultValue=""
                      className="w-full h-11 pl-4 pr-10 rounded border border-[#e5e5e5] text-sm text-[#1a1a1a] bg-white focus:outline-none focus:border-[#299dd9] transition-colors appearance-none"
                    >
                      <option value="" disabled>
                        選択してください
                      </option>
                      {['1年生', '2年生', '3年生', '4年生', '大学院生'].map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#808080]"
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </>
            )}

            {/* お問い合わせ内容 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#1a1a1a]">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="ご質問・ご要望をご記入ください"
                className="px-4 py-3 rounded border border-[#e5e5e5] text-sm text-[#1a1a1a] placeholder:text-[#808080] focus:outline-none focus:border-[#299dd9] transition-colors resize-none"
              />
            </div>

            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            {/* 送信ボタン */}
            <button
              type="submit"
              disabled={submitting}
              className="h-12 px-6 rounded text-sm font-medium text-white bg-[#4a4a4a] hover:bg-[#333333] transition-colors duration-200 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? '送信中...' : '送信する'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
