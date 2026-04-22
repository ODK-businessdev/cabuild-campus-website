import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 px-6 md:py-28" style={{ backgroundColor: '#EFBB3F' }}>
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-6 items-center">
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{ fontFamily: 'var(--font-heading)', color: '#3A455C' }}
        >
          あなたの経験に、
          <br />
          まだ言葉になっていない強みがある。
        </h2>

        <p className="text-base leading-relaxed" style={{ color: '#3A455C' }}>
          無料・いつでも中断・再開OK。
          <br />
          まず一つの経験から始めてみよう。
        </p>

        <a
          href="https://campus.cabuild.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: '#3A455C' }}
        >
          無料で始める
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
