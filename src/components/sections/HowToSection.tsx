const steps = [
  { number: 1, title: '診断を受ける', phase: 'FIRST STEP' },
  { number: 2, title: '自己分析をする', phase: 'FIRST STEP' },
  { number: 3, title: '企業研究をする', phase: 'FIRST STEP' },
  { number: 4, title: 'ESを作成・添削する', phase: 'SECOND STEP' },
  { number: 5, title: '面接練習をする', phase: 'SECOND STEP' },
]

const phaseInfo = {
  'FIRST STEP': {
    description: 'まず集中して取り組む',
    heading: 'まずはここから始める',
    numberBg: '#ffffff',
    numberText: '#299dd9',
    lineColor: 'rgba(255,255,255,0.5)',
    targets: [
      { label: '大学1・2年生', description: '長期インターンや自己理解の入口として' },
      { label: '大学3年生〜', description: 'サマーインターン・本選考前の集中準備として' },
    ],
  },
  'SECOND STEP': {
    description: '選考のタイミングで使う',
    heading: '選考対策を始める',
    numberBg: '#ffffff',
    numberText: '#8fc23f',
    lineColor: 'rgba(255,255,255,0.5)',
    targets: [
      { label: '大学1・2年生', description: '長期インターンのエントリー時に' },
      { label: '大学3年生〜', description: 'インターン・本選考のエントリー時に' },
    ],
  },
} as const

type PhaseName = keyof typeof phaseInfo

const phases: { name: PhaseName; steps: typeof steps }[] = [
  { name: 'FIRST STEP', steps: steps.filter((s) => s.phase === 'FIRST STEP') },
  { name: 'SECOND STEP', steps: steps.filter((s) => s.phase === 'SECOND STEP') },
]

export default function HowToSection() {
  return (
    <section id="howto" className="bg-[#299dd9] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            使い方・流れ
          </h2>
          <p className="text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            2つのフェーズで、就活準備から選考まで一気通貫でサポートします。
          </p>
        </div>

        {/*
          2×2グリッド:
          - 1行目: 各フェーズのステップエリア（高さが揃う）
          - 2行目: 各フェーズのターゲットカード（上辺が自動的に揃う）
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">

          {/* ====== 1行目: ステップエリア ====== */}
          {phases.map((phase) => {
            const info = phaseInfo[phase.name]
            return (
              <div key={`steps-${phase.name}`} className="pb-8">
                {/* フェーズラベル */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded text-xs font-bold tracking-widest"
                    style={{ backgroundColor: '#ffffff', color: info.numberText }}
                  >
                    {phase.name}
                  </span>
                </div>
                <p
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {info.heading}
                </p>

                {/* ステップ一覧 */}
                <div className="flex flex-col">
                  {/* SECOND STEP: ①②③ゴースト＋点線でFIRST STEPとの繋がりを表現 */}
                  {phase.name === 'SECOND STEP' && (
                    <div className="flex gap-5">
                      {/* 左: 点線（④⑤の円と同じ中心軸 = w-10の中央） */}
                      <div className="w-10 shrink-0 flex justify-center">
                        <div
                          style={{
                            borderLeft: '2px dashed rgba(255,255,255,0.35)',
                            minHeight: '72px',
                          }}
                        />
                      </div>
                      {/* 右: ①②③ + テキスト */}
                      <div className="flex flex-col justify-center gap-2 pb-4">
                        <div className="flex items-center gap-1.5">
                          {[1, 2, 3].map((n) => (
                            <div
                              key={n}
                              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{
                                backgroundColor: 'rgba(255,255,255,0.25)',
                                color: 'rgba(255,255,255,0.65)',
                              }}
                            >
                              {n}
                            </div>
                          ))}
                        </div>
                        <p
                          className="text-sm"
                          style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-heading)' }}
                        >
                          FIRST STEPより続く
                        </p>
                      </div>
                    </div>
                  )}

                  {phase.steps.map((step, stepIndex) => {
                    const isLastInPhase = stepIndex === phase.steps.length - 1
                    return (
                      <div key={step.number} className="flex gap-5">
                        {/* 左: 番号 + 縦線 */}
                        <div className="w-10 shrink-0 flex flex-col items-center">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                            style={{
                              backgroundColor: info.numberBg,
                              color: info.numberText,
                            }}
                          >
                            {step.number}
                          </div>
                          {!isLastInPhase && (
                            <div
                              className="flex-1 my-1"
                              style={{
                                borderLeft: `2px solid ${info.lineColor}`,
                                minHeight: '32px',
                              }}
                            />
                          )}
                        </div>
                        {/* 右: テキスト */}
                        <div className="pb-6 pt-2 flex-1">
                          <p
                            className="text-xl font-bold text-white"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {step.title}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

          {/* ====== 2行目: ターゲットカード（CSSグリッドが上辺を自動的に揃える） ====== */}
          {phases.map((phase) => {
            const info = phaseInfo[phase.name]
            return (
              <div key={`card-${phase.name}`} className="rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
                {info.targets.map((target) => (
                  <div key={target.label} className="flex flex-col gap-1">
                    <span className="text-xs font-bold" style={{ color: info.numberText }}>
                      {target.label}
                    </span>
                    <span className="text-sm text-[#4a4a4a]">{target.description}</span>
                  </div>
                ))}
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
