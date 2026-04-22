import { AlertCircle } from 'lucide-react'

const problems = [
  ['自己分析の本を買ったけど、', '続かなかった'],
  ['ESは書けても、', '面接で深掘りされると止まる'],
  ['強みはわかった気がするけど、', '自分の言葉で話せない'],
  ['就活の軸って何？と聞かれると、', 'うまく答えられない'],
]

export default function ProblemSection() {
  return (
    <section className="py-16 px-6 md:py-24" style={{ backgroundColor: '#DBE7F2' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          style={{ fontFamily: 'var(--font-heading)', color: '#3A455C' }}
        >
          こんなこと、
          <br />
          思ったことありませんか？
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((lines, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white rounded-2xl p-6 border"
              style={{ borderColor: 'rgba(58,69,92,0.1)' }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: '#DBE7F2' }}
              >
                <AlertCircle size={16} style={{ color: '#3A455C' }} />
              </div>
              <p className="text-sm md:text-base leading-relaxed font-medium" style={{ color: '#3A455C' }}>
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
