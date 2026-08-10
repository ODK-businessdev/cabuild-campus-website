'use client'

import { ArrowRight, ArrowDown, X } from 'lucide-react'
import { useState } from 'react'

const beforeAfter = [
  {
    before: '「なんとなく頑張った」',
    after: ['「チームの方向性がズレていると感じたとき、', '自分から調整役を買って出る」と具体的に語れる'],
  },
  {
    before: '「強みは…協調性？」',
    after: ['3つの強みが、エピソードと行動パターンとともに', '言語化された状態で手元に残る'],
  },
  {
    before: '「就活の軸がわからない」',
    after: ['Will・Can・Mustが整理され、', '企業選びの基準がひと目でわかるシートになる'],
  },
]


export default function OutputSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="py-16 px-6 md:py-24 bg-white border-t" style={{ borderColor: 'rgba(58,69,92,0.12)' }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* 見出し */}
        <div className="text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#3A455C' }}
          >
            経験が言葉になった状態で、
            <br />
            就活を進められる。
          </h2>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#3A455C' }}>
            AIが答えを出すのではなく、
            <br />
            対話を通じてあなた自身が納得した言葉だけが残る。
            <br />
            だから面接で深掘りされても止まらない。
          </p>
        </div>

        {/* Before / After */}
        <div className="flex flex-col">
          {beforeAfter.map((row, i) => (
            <div key={i}>
              {/* セット */}
              <div className="flex flex-col gap-3 py-6">
                {/* 使う前 */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium" style={{ color: '#808080' }}>使う前</span>
                  <p className="text-sm leading-relaxed" style={{ color: '#3A455C' }}>{row.before}</p>
                </div>
                {/* 矢印 */}
                <div className="flex justify-center">
                  <ArrowDown size={20} style={{ color: '#EFBB3F' }} />
                </div>
                {/* 使った後 */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold" style={{ color: '#3A455C' }}>使った後</span>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: '#3A455C' }}>
                    {row.after[0]}
                    <br />
                    {row.after[1]}
                  </p>
                </div>
              </div>
              {/* 区切り線（最後のセット以外） */}
              {i < beforeAfter.length - 1 && (
                <hr style={{ borderColor: 'rgba(58,69,92,0.12)' }} />
              )}
            </div>
          ))}
        </div>

        {/* 出力画面サムネイル＋モーダルボタン */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="relative rounded-xl overflow-hidden border cursor-pointer hover:opacity-90 transition-opacity duration-200"
            style={{ width: '320px', borderColor: 'rgba(58,69,92,0.15)' }}
            onClick={() => setModalOpen(true)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/output-sample.png"
              alt="自己分析AI 出力画面イメージ"
              className="w-full h-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded text-sm font-medium transition-opacity duration-200 border hover:opacity-70"
            style={{ borderColor: '#3A455C', color: '#3A455C' }}
          >
            出力サンプルを見る
          </button>
        </div>

        {/* 誘導リンク */}
        <div className="text-center">
          <a
            href="#features"
            className="inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: '#3A455C' }}
          >
            志望動機づくりは、企業研究AIで。
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* モーダル */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden flex flex-col"
            style={{ width: '100%', maxWidth: '720px', maxHeight: '88vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b shrink-0"
              style={{ borderColor: 'rgba(58,69,92,0.15)' }}
            >
              <p
                className="text-xs md:text-sm font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: '#3A455C' }}
              >
                自己分析AI 出力画面サンプル
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-gray-100"
                style={{ color: '#3A455C' }}
              >
                <X size={18} />
              </button>
            </div>
            <div className="overflow-y-auto flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/self-analysis-full.png"
                alt="自己分析AI 出力画面サンプル"
                className="w-full h-auto"
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
