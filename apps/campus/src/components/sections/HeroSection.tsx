import { ArrowRight } from 'lucide-react'
import HeroAnimation from '@/components/sections/HeroAnimation'

export default function HeroSection() {
  return (
    <section className="bg-white pt-16 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* 左カラム: テキスト */}
          <div className="flex flex-col gap-8 md:gap-[54px] pt-8 md:pt-[70px]">
            {/* キャッチコピー */}
            <h1
              className="text-[2.6rem] md:text-[6.075rem] font-bold text-[#1a1a1a] leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              就活は、
              <br />
  出会いだ。
            </h1>

            {/* サブコピー */}
            <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed">
              自分のことがわかると、目指す企業が見えてくる。
              <br />
              就活は、自分の本質との出会い ✕ 企業との出会い。
              <br />
              AIが、あなたの言葉にならなかった強みや価値観を引き出します。
            </p>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://campus.cabuild.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded text-sm font-medium text-white bg-[#299dd9] hover:bg-[#2490cc] transition-colors duration-200"
              >
                無料ではじめる
                <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center h-12 px-6 rounded text-sm font-medium text-[#299dd9] border border-[#299dd9] hover:bg-[#edf7fd] transition-colors duration-200"
              >
                機能を見る
              </a>
            </div>

          </div>

          {/* 右カラム: アニメーション */}
          <div className="flex items-center justify-center">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
