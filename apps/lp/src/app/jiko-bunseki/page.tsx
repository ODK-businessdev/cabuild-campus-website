import type { Metadata } from 'next'
import HeroSection from './_components/HeroSection'
import ProblemSection from './_components/ProblemSection'
import OutputSection from './_components/OutputSection'
import CtaSection from './_components/CtaSection'

export const metadata: Metadata = {
  title: '自己分析AI | CABUILDキャンパス',
  description:
    'AIとの対話で、あなた自身も気づいていなかった強みや就活の軸を言語化。無料で始められる自己分析AIツール。',
  openGraph: {
    title: '自己分析AI | CABUILDキャンパス',
    description:
      'AIとの対話で、あなた自身も気づいていなかった強みや就活の軸を言語化。無料で始められる自己分析AIツール。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function JikoBunsekiPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <OutputSection />
<CtaSection />
    </>
  )
}
