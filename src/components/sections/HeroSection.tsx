import { ArrowRight } from 'lucide-react'
import HeroAnimation from '@/components/sections/HeroAnimation'

export default function HeroSection() {
  return (
    <section className="bg-white pt-16 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 左カラム: テキスト */}
          <div className="flex flex-col gap-6">
            {/* キャッチコピー */}
            <h1
              className="text-[4.5rem] md:text-[6.75rem] font-bold text-[#1a1a1a] leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              就活は、
              <br />
              <span className="inline-block relative" style={{ transform: 'rotate(-3deg)', verticalAlign: 'baseline', marginTop: '15px', marginBottom: '15px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/deai-handwritten.png"
                  alt="出会い"
                  style={{
                    height: '1em',
                    width: 'auto',
                    display: 'block',
                  }}
                />
                {/* 手書きアンダーバー画像 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/underbar.png"
                  alt=""
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: '-0.28em',
                    left: '-2%',
                    width: '104%',
                    height: 'auto',
                    transform: 'rotate(-3deg)',
                    transformOrigin: 'left center',
                  }}
                />
              </span><span style={{ marginLeft: '15px', position: 'relative', top: '-25px' }}>だ。</span>
            </h1>

            {/* サブコピー */}
            <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed">
              やりたいことがなくていい。まず自分を知ることからはじめよう。
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

            {/* 信頼テキスト */}
            <p className="text-xs text-[#808080]">
              株式会社ポトス（ODKソリューションズグループ）提供 ·
              就活内定率98.2%のAbuild就活と共同開発
            </p>
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
