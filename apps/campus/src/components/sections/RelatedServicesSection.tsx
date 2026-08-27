import { ArrowRight } from 'lucide-react'

/**
 * 関連サービス紹介セクション
 *
 * TODO: 見出し下のリード文は仮。正式なコピーが決まったら差し替える
 */

type RelatedService = {
  name: string
  copy: string
  href: string
  banner: string
}

/** バナー画像の実寸（716 × 268） */
const BANNER_ASPECT = 'aspect-[716/268]'

const relatedServices: RelatedService[] = [
  {
    name: 'Abuild就活',
    copy: '難関企業・トップ企業の内定を目指す学生向けの就活支援サービス',
    href: 'https://abuild-c.com/',
    banner: '/related/banner-abuild.png',
  },
  {
    name: 'ガクチカ留学',
    copy: '就活・将来に活きる留学サービス',
    href: 'https://gakuchika-ryugaku.com/',
    banner: '/related/banner-gakuchika.png',
  },
]

export default function RelatedServicesSection() {
  return (
    <section id="related" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#299dd9] mb-3">関連サービス</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            就活を、もっと先へ
          </h2>
          <p className="text-base text-[#4a4a4a] max-w-xl mx-auto leading-relaxed">
            {/* 仮コピー */}
            もっと踏み込んで準備したくなったときのために。
            <br className="hidden sm:inline" />
            CABUILDキャンパスと一緒に使えるサービスをご紹介します。
          </p>
        </div>

        {/* サービスカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedServices.map((service) => (
            <a
              key={service.name}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[#e5e5e5] overflow-hidden hover:border-[#b8dff4] hover:shadow-sm transition-all duration-200"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.banner}
                alt={`${service.name}のバナー`}
                width={716}
                height={268}
                className={`w-full ${BANNER_ASPECT} object-cover`}
              />
              <div className="px-5 py-5 flex flex-col gap-2">
                <h3
                  className="text-base font-bold text-[#1a1a1a]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.name}
                </h3>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">{service.copy}</p>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[#299dd9]">
                  詳しく見る
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
