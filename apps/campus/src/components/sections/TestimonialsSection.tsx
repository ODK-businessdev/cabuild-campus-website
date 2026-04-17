'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    attribute: '武蔵野美術大学・2年',
    comment:
      'キャリアタイプ診断では、自分では気づけなかった『共感力の高さ』などの強みを客観的に分析してもらえ、非常に納得感がありました。また、自己分析で過去の経験を深掘りし、AIとの対話を通じて自分の根底にある考え方を言語化できたことも大きな収穫です。就活の第一歩を気軽に、かつ楽しく踏み出すことができました。',
  },
  {
    attribute: '神戸女学院大学・理系・2年',
    comment:
      '就活の進め方がわからず高いハードルを感じていましたが、このサービスを利用して具体的な流れを把握できました。特に自己分析では、自分でも言語化できていなかった性格や強みをAIが客観的な文章にまとめてくれたことに驚きました。自分の特性に合う進路が明確になり、自信を持って将来を考えられるようになりました。',
  },
  {
    attribute: '私立大学・3年',
    comment:
      '自己分析や企業分析など、就職活動の準備において「何から始めればいいか」という不安がありましたが、AIが情報を整理し、具体的な改善案を提案してくれる点に大きな魅力を感じました。自分一人では言語化が難しい経験も、AIのサポートを受けることでスムーズに形にすることができ、就活に対するイメージが具体的になったことで、モチベーションの維持にも繋がっています。',
  },
  {
    attribute: '日本大学・文系・3年',
    comment:
      'ステップに沿って自己分析を進めることで、自分一人では気づけなかった強みを客観的な言葉で引き出せました。過去の経験を保存し、いつでも見返して活用できる仕組みも非常に便利です。AIの的確なアドバイスのおかげで、不安だった就活の第一歩を迷うことなく、スムーズに踏み出すことができました。',
  },
  {
    attribute: '広島大学・理系・3年',
    comment:
      '以前は周囲の流れに任せて就職先を決めていましたが、本サービスを通じて改めて自分と向き合うことができました。特に自己分析機能は、AIがMBTI診断などの客観的なデータに基づき、自分の強みだけでなくネガティブな側面まで含めて抽出してくれる点が非常に参考になります。納得感を持って進路を選べるようになり、就活への意識が大きく変わりました。',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const item = testimonials[current]

  return (
    <section className="bg-[#edf7fd] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            ユーザーの声
          </h2>
          <p className="text-sm text-[#4a4a4a] leading-relaxed">
            実際に利用した学生にインタビューを実施しました。
          </p>
        </div>
        <p className="text-base text-[#4a4a4a] text-center mb-12 mt-4">
          <span
            style={{
              backgroundImage: 'linear-gradient(rgba(41,157,217,0.6), rgba(41,157,217,0.6))',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 4px',
              backgroundPosition: '0 92%',
            }}
          >
            Q. 利用してみてあなた<strong className="font-bold text-[#1a1a1a]">自身の変化</strong>やサービスに<strong className="font-bold text-[#1a1a1a]">魅力</strong>を感じたことはありましたか？
          </span>
        </p>

        {/* カルーセル */}
        <div className="relative">
          {/* カード */}
          <div className="bg-white rounded-2xl border border-[#b8dff4] p-8 min-h-48 flex flex-col justify-between">
            <span className="text-4xl text-[#b8dff4] font-serif leading-none mb-4">&quot;</span>
            <p className="text-base text-[#4a4a4a] leading-relaxed flex-1">
              {item.comment}
            </p>
            <div className="mt-8 pt-6 border-t border-[#e5e5e5]">
              <p className="text-sm text-[#808080]">{item.attribute}</p>
            </div>
          </div>

          {/* ナビゲーション */}
          <div className="flex items-center justify-between mt-6">
            {/* 前へ */}
            <button
              onClick={prev}
              aria-label="前へ"
              className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#4a4a4a] hover:border-[#299dd9] hover:text-[#299dd9] transition-colors duration-200"
            >
              <ChevronLeft size={18} />
            </button>

            {/* ドットインジケーター */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`${i + 1}件目`}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: i === current ? '#299dd9' : '#e5e5e5',
                    transform: i === current ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
            </div>

            {/* 次へ */}
            <button
              onClick={next}
              aria-label="次へ"
              className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-[#4a4a4a] hover:border-[#299dd9] hover:text-[#299dd9] transition-colors duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* カウンター */}
          <p className="text-center text-xs text-[#808080] mt-3">
            {current + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}
