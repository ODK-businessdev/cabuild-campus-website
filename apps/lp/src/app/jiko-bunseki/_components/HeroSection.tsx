import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-white py-20 px-6 md:py-28">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
        <h1
          className="font-bold leading-tight text-left w-full"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#3A455C',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            animation: 'heroFadeIn 0.5s ease-in both',
          }}
        >
          AIが、
          <br />
          あなた自身も
          <br />
          気づいていない言葉を
          <br />
          引き出す。
        </h1>

        <style>{`
          @keyframes heroFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
        `}</style>

        <p className="text-base md:text-lg leading-relaxed max-w-xl text-left" style={{ color: '#3A455C' }}>
          「なんとなく頑張った」で終わっていた経験が、
          <br />
          面接で語れる言葉になる。
          <br />
          自己分析AIは、答えを教えるのではなく、
          <br />
          問い続けることであなた自身が納得できる就活の軸をつくる。
        </p>

        <a
          href="https://campus.cabuild.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded text-sm font-bold transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: '#EFBB3F', color: '#3A455C' }}
        >
          無料で始める
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
