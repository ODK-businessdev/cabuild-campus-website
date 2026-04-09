import { Lightbulb, Compass, Building2, Shield } from 'lucide-react'

const experiences = [
  {
    icon: Lightbulb,
    titleLine1: '何からすればいいか、',
    titleLine2: 'わかる。',
    description:
      '自分の経験をAIと一緒に振り返ることで、気づいていなかった強みや価値観が明確になる。「なんとなく」が、言葉になる。',
  },
  {
    icon: Compass,
    titleLine1: '就活の進め方が、',
    titleLine2: '迷わなくなる。',
    description:
      '自分の強みや価値観が言語化されることで、企業選びや志望動機に一本の軸ができる。軸があるから、次に何をすべきかが自然と見えてくる。',
  },
  {
    icon: Building2,
    titleLine1: '選べる会社が、',
    titleLine2: '増える。',
    description:
      '自分のタイプを知ることで、これまで視野に入っていなかった企業や職種が選択肢に入ってくる。思い込みではなく、自分に合った企業と出会える。',
  },
  {
    icon: Shield,
    titleLine1: '就活が、',
    titleLine2: '怖くなくなる。',
    description:
      '準備が整っている実感が、不安を前向きな気持ちに変えていく。自分を知っているから、自信を持って選考に臨める。',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#edf7fd] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            こんな体験ができます
          </h2>
          <p className="text-base text-[#4a4a4a] max-w-xl mx-auto leading-relaxed">
            就活に必要な準備ツールがすべて揃っているから、
            <br className="hidden sm:inline" />
            迷わず集中して取り組める。
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#e5e5e5] flex flex-col gap-4 hover:border-[#b8dff4] hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#edf7fd] flex items-center justify-center shrink-0">
                  <Icon size={20} color="#299dd9" />
                </div>
                <h3
                  className="text-xl font-bold text-[#1a1a1a] leading-relaxed"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {/* 背景グラデーションで文字の下部に重なるアンダーバーを描画 */}
                  <span
                    className="inline"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(41,157,217,0.6), rgba(41,157,217,0.6))',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100% 4px',
                      backgroundPosition: '0 92%',
                    }}
                  >
                    {item.titleLine1}
                  </span>
                  <br />
                  <span
                    className="inline"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(41,157,217,0.6), rgba(41,157,217,0.6))',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100% 4px',
                      backgroundPosition: '0 92%',
                    }}
                  >
                    {item.titleLine2}
                  </span>
                </h3>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
