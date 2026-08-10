import type { Metadata } from 'next'
import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Klee_One } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: '--font-zen-kaku-gothic-new',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const kleeOne = Klee_One({
  variable: '--font-klee-one',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://campus-web.cabuild.jp'
  ),
  alternates: {
    canonical: '/',
  },
  title: 'CABUILDキャンパス | 就活は、出会いだ。',
  description:
    '自己分析・企業研究・ES添削をAIでサポート。就活に必要な準備ツールがすべて揃っています。CABUILDキャンパスで、自分との出会いから企業との出会いへ。',
  keywords: ['就活', '自己分析', '企業研究', 'ES添削', 'AI', '就職活動', '学生'],
  openGraph: {
    title: 'CABUILDキャンパス | 就活は、出会いだ。',
    description:
      '自己分析・企業研究・ES添削をAIでサポート。就活に必要な準備ツールがすべて揃っています。',
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CABUILDキャンパス',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CABUILDキャンパス | 就活は、出会いだ。',
    description:
      '自己分析・企業研究・ES添削をAIでサポート。就活に必要な準備ツールがすべて揃っています。',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${zenKakuGothicNew.variable} ${kleeOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
