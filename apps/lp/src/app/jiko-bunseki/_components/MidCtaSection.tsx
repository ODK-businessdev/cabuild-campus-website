import { ArrowRight } from 'lucide-react'

export default function MidCtaSection() {
  return (
    <section className="py-12 px-6 bg-white border-t" style={{ borderColor: 'rgba(58,69,92,0.12)' }}>
      <div className="flex justify-center">
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
