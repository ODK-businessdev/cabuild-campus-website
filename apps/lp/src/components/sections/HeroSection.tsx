export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-[#299dd9] tracking-widest uppercase">
            CABUILD Campus
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            就活は、出会いだ。
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
            自己分析・企業研究・ES添削をAIがサポート。<br />
            自分との出会いから、企業との出会いへ。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://campus.cabuild.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded text-base font-medium text-white bg-[#299dd9] hover:bg-[#2490cc] transition-colors duration-200"
          >
            無料ではじめる
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center h-12 px-8 rounded text-base font-medium text-gray-700 border border-gray-200 hover:border-[#299dd9] hover:text-[#299dd9] transition-colors duration-200"
          >
            詳しく見る
          </a>
        </div>
      </div>
    </section>
  )
}
