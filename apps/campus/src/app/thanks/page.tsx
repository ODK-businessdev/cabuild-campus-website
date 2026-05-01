import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ完了 | CABUILDキャンパス',
  robots: { index: false },
}

export default function ThanksPage() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 flex-1">
      <div className="max-w-2xl mx-auto text-center">
        {/* アイコン */}
        <div className="w-16 h-16 rounded-full bg-[#8fc23f] flex items-center justify-center mx-auto mb-8">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* 見出し */}
        <h1
          className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          お問い合わせ内容の送信が完了しました
        </h1>

        {/* 説明文 */}
        <p className="text-base text-[#4a4a4a] leading-relaxed mb-2">
          お問い合わせありがとうございました。
        </p>
        <p className="text-base text-[#4a4a4a] leading-relaxed mb-2">
          ご入力いただいたメールアドレスに2〜3営業日以内に担当者よりご連絡いたします。
        </p>
        <p className="text-base text-[#4a4a4a] leading-relaxed mb-12">
          恐れ入りますがしばらくお待ちください。
        </p>

        {/* 戻るボタン */}
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-8 rounded text-sm font-medium text-white bg-[#299dd9] hover:bg-[#2490cc] transition-colors duration-200"
        >
          トップページへ戻る
        </Link>
      </div>
    </section>
  )
}
