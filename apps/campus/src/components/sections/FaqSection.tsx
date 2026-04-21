import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Script from 'next/script'

const faqs = [
  {
    question: '利用料金はかかりますか？',
    answer: 'CABUILDキャンパスは完全無料でご利用いただけます。',
  },
  {
    question: 'スマホでも使えますか？',
    answer:
      'スマホでもご利用いただけます。ただし、ES添削や面接練習などはPCでのご利用をおすすめしています。',
  },
  {
    question: 'どのくらいの時間がかかりますか？',
    answer:
      'ご利用いただく方やタイミングによって異なります。当サービスは明確なゴールを設けておらず、必要なときに適宜お使いいただける設計となっております。保存機能もございますので、ぜひ一度お試しください。',
  },
  {
    question: '他の就活サービスと何が違いますか？',
    answer:
      '就活準備に必要なツールを一括して利用できる点が大きな特徴です。AIが24時間サポートするため、自分のペースで進められます。また、AIが一つの正解を生成するのではなく、利用者自身が納得できる言葉に導く設計になっています。面接で自分の言葉として話せるため、長期的に価値のある就活準備が可能です。',
  },
  {
    question: '面接練習AIはいつから使えますか？',
    answer: '2026年夏頃のリリースを予定しています。',
  },
  {
    question: '何年生から使えますか？',
    answer:
      '大学1年生からご利用いただけます。低学年のうちから自己分析や企業研究に取り組むことで、就活の準備をより早く始められます。',
  },
  {
    question: '個人情報は安全ですか？',
    answer:
      '情報セキュリティに関する認証を受けており、個人情報を含むデータは適切に管理しております。安心してご利用ください。詳しくはプライバシーポリシーをご覧ください。',
  },
  {
    question: '運営元はどこですか？',
    answer:
      'CABUILDキャンパスは、株式会社ポトスが提供するサービスです。株式会社ポトスは、全国約110大学・受験生の2/3以上が利用する大学受験ポータルサイト「UCARO」を提供するODKソリューションズ（東証：3839）グループの一員です。就活内定率98.2%を誇る就活塾「Abuild就活」を運営するNINJAPANとともに、CABUILDを共同提供しています。',
  },
  {
    question: 'やりたいことがない人でも使えますか？',
    answer:
      'やりたいことを見つけるためにもご利用いただけます。まず自分を知ることが、就活の第一歩です。ぜひ気軽に始めてみてください。',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FaqSection() {
  return (
    <section id="faq" className="bg-[#fafafa] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            よくある質問
          </h2>
          <p className="text-base text-[#4a4a4a] max-w-xl mx-auto leading-relaxed">
            不安や疑問を解消します。
          </p>
        </div>

        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Accordion className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border border-[#e5e5e5] px-6 data-[state=open]:border-[#b8dff4]"
            >
              <AccordionTrigger
                className="text-sm font-medium text-[#1a1a1a] text-left py-5 hover:no-underline"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#4a4a4a] leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
