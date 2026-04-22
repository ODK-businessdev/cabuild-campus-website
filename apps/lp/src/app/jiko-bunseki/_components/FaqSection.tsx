import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'AIとの対話はどんな内容ですか？',
    answer:
      '「そのとき、なぜその行動を選びましたか？」「うまくいったとき、何が決め手だったと思いますか？」など、経験の背景や動機を掘り下げる質問が中心です。詰問ではなく、思い出せるよう促すかたちで進みます。',
  },
  {
    question: '小中高のエピソードも必要ですか？',
    answer:
      'はい、4時期（小中高大）のエピソードを収集します。ただし、詳細に覚えていなくても大丈夫です。AIの質問に答えていくうちに記憶が整理されていきます。',
  },
  {
    question: '途中で保存できますか？',
    answer:
      'はい、保存機能があります。5ステップを一度に終わらせる必要はなく、空いた時間に少しずつ進められます。',
  },
  {
    question: '12キャリアタイプ診断との違いは何ですか？',
    answer:
      '診断は「あなたはどんなタイプか」を分類するものです。自己分析AIは「なぜそう行動したか」「どんな価値観が根底にあるか」を対話で深掘りするものです。診断後に自己分析AIを使うことで、タイプの理解をさらに自分の言葉として定着させられます。',
  },
  {
    question: 'やりたいことがない人でも使えますか？',
    answer:
      'むしろそういう人のためのツールです。経験を振り返ることで「なんとなく好きだったこと」が言語化され、就活の軸が生まれます。',
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 px-6 md:py-24 bg-white border-t" style={{ borderColor: 'rgba(58,69,92,0.12)' }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          style={{ fontFamily: 'var(--font-heading)', color: '#3A455C' }}
        >
          よくある質問
        </h2>

        <Accordion className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white rounded-xl border-0 px-6"
            >
              <AccordionTrigger
                className="py-5"
                style={{ fontFamily: 'var(--font-heading)', color: '#3A455C' }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent style={{ color: '#3A455C' }}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
