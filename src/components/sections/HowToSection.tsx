'use client'

import { useState } from 'react'

type Grade = 1 | 2 | 3 | 4

type StepCard = {
  phase: string
  phaseColor: 'blue' | 'green' | 'neutral'
  title: string
  steps: string[]
  ordered: boolean
  start?: number
}

type GradeData = {
  year: string
  title: string
  subtitle: string
  cards: [StepCard, StepCard]
  note: string
}

const gradeData: Record<Grade, GradeData> = {
  1: {
    year: 'YEAR 1',
    title: 'まず「自分」を知るところから',
    subtitle: 'バイト・ゼミ・サークル選びを就活目線で考え始める',
    cards: [
      {
        phase: 'FIRST STEP',
        phaseColor: 'blue',
        title: '自己理解を深める',
        steps: [
          '診断を受ける — 自分の強みや価値観を把握',
          '自己分析をする — バイト・ゼミ選びの軸を言語化',
          '企業研究をする — 業界をゆるく知る',
        ],
        ordered: true,
        start: 1,
      },
      {
        phase: '活用シーン',
        phaseColor: 'neutral',
        title: 'こんなときに使おう',
        steps: [
          'バイト・ゼミを決める前の「自己理解」の入口として',
          'サークルや課外活動の選び方を整理したいとき',
          '将来なんとなく気になる業界を調べる入門として',
        ],
        ordered: false,
      },
    ],
    note: '今は焦らなくてOK。診断・自己分析だけ先にやっておくと、バイトやゼミ選びの「理由」が明確になり、後の就活でそのまま語れるエピソードになります。',
  },
  2: {
    year: 'YEAR 2',
    title: '長期インターンへの準備を本格化',
    subtitle: 'エントリーシートの基礎を作り、実務経験を積み始める',
    cards: [
      {
        phase: 'FIRST STEP',
        phaseColor: 'blue',
        title: '土台をつくる',
        steps: [
          '診断を受ける — 自分の強みを確認',
          '自己分析をする — 長期インターン応募の軸を整理',
          '企業研究をする — 志望業界・職種を絞る',
        ],
        ordered: true,
        start: 1,
      },
      {
        phase: 'SECOND STEP',
        phaseColor: 'green',
        title: '選考対策へ',
        steps: [
          'ESを作成・添削 — 長期インターンのES対策',
          '面接練習 — インターン選考の面接準備',
        ],
        ordered: true,
        start: 4,
      },
    ],
    note: '長期インターンのエントリー時期に合わせてES作成と面接練習を集中的に。2年生のうちに実務経験を積むと、3年生での就活が圧倒的に楽になります。',
  },
  3: {
    year: 'YEAR 3',
    title: 'サマーインターン・早期選考を狙う',
    subtitle: '夏までに全ステップを完走し、秋の早期内定を獲りにいく',
    cards: [
      {
        phase: 'FIRST STEP（春）',
        phaseColor: 'blue',
        title: '5月までに完了させる',
        steps: [
          '診断を受ける',
          '自己分析をする — ガクチカ・志望動機を仮確定',
          '企業研究をする — サマーインターン候補を洗い出す',
        ],
        ordered: true,
        start: 1,
      },
      {
        phase: 'SECOND STEP（夏〜秋）',
        phaseColor: 'green',
        title: '選考を突破する',
        steps: [
          'ESを作成・添削 — サマーインターンES提出',
          '面接練習 — インターン→早期選考の通し対策',
        ],
        ordered: true,
        start: 4,
      },
    ],
    note: 'サマーインターン（6月締切目安）のESと面接練習が最優先。インターン参加後に早期選考ルートに乗れるかが勝負。秋には本選考ESの添削も同時並行で進めましょう。',
  },
  4: {
    year: 'YEAR 4',
    title: '今すぐ動く、全力で追い上げる',
    subtitle: '本選考ESと面接対策に集中して内定を獲りにいく',
    cards: [
      {
        phase: 'FIRST STEP（即着手）',
        phaseColor: 'blue',
        title: '今週中に終わらせる',
        steps: [
          '診断を受ける — 強みを即把握',
          '自己分析をする — ガクチカ・志望動機を急ぎ確定',
          '企業研究をする — 応募企業を絞り込む',
        ],
        ordered: true,
        start: 1,
      },
      {
        phase: 'SECOND STEP（並行）',
        phaseColor: 'green',
        title: '選考を同時進行',
        steps: [
          'ESを作成・添削 — 本選考ESを片っ端から提出',
          '面接練習 — 本番形式で繰り返しトレーニング',
        ],
        ordered: true,
        start: 4,
      },
    ],
    note: 'FIRST STEPと並行してすぐにES提出・面接練習を始めてください。時間がない分、ES添削と面接練習の回数が勝負。まず1社出すことが最初のゴールです。',
  },
}

const grades: Grade[] = [1, 2, 3, 4]
const gradeLabels: Record<Grade, string> = {
  1: '大学1年生',
  2: '大学2年生',
  3: '大学3年生',
  4: '大学4年生',
}

const phaseTagStyle: Record<StepCard['phaseColor'], { backgroundColor: string; color: string }> = {
  blue:    { backgroundColor: '#299dd9', color: '#ffffff' },
  green:   { backgroundColor: '#8fc23f', color: '#ffffff' },
  neutral: { backgroundColor: '#e5e5e5', color: '#4a4a4a' },
}

export default function HowToSection() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>(1)
  const data = gradeData[selectedGrade]

  return (
    <section id="howto" className="bg-[#299dd9] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            使い方・流れ
          </h2>
          <p className="text-base text-white font-medium max-w-xl mx-auto leading-relaxed">
            あなたの学年を選んでください
          </p>
        </div>

        {/* タブボタン */}
        <div className="flex flex-wrap gap-2 justify-center mb-8" role="tablist">
          {grades.map((grade) => {
            const isActive = selectedGrade === grade
            return (
              <button
                key={grade}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedGrade(grade)}
                className="px-5 py-2 rounded-full text-sm transition-all duration-200"
                style={{
                  backgroundColor: isActive ? '#ffffff' : 'transparent',
                  color: isActive ? '#299dd9' : '#ffffff',
                  border: isActive ? '1px solid #ffffff' : '1px solid rgba(255,255,255,0.65)',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {gradeLabels[grade]}
              </button>
            )
          })}
        </div>

        {/* パネル */}
        <div role="tabpanel">
          {/* ヒーロー + 補足メモ（2カラム） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
            {/* 左: ヒーロー */}
            <div>
              <span className="text-sm font-bold tracking-widest block mb-3 text-white">
                {data.year}
              </span>
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {data.title}
              </h3>
              <p className="text-sm text-white font-medium">
                {data.subtitle}
              </p>
            </div>

            {/* 右: 補足メモ */}
            <div className="md:pt-8">
              <p className="text-sm leading-relaxed text-white font-medium">
                {data.note.split('。').filter(Boolean).map((sentence, i, arr) => (
                  <span key={i}>
                    {sentence}。
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* 2カラムカード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.cards.map((card, i) => (
              <div key={i} className="bg-white rounded-xl p-5">
                <span
                  className="inline-flex items-center px-3 py-0.5 rounded text-xs font-bold tracking-widest mb-3"
                  style={phaseTagStyle[card.phaseColor]}
                >
                  {card.phase}
                </span>
                <p
                  className="text-sm font-bold text-[#1a1a1a] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {card.title}
                </p>
                {card.ordered ? (
                  <ol className="list-decimal pl-5 space-y-1.5" start={card.start}>
                    {card.steps.map((step, j) => (
                      <li key={j} className="text-sm text-[#4a4a4a] leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="list-disc pl-5 space-y-1.5">
                    {card.steps.map((step, j) => (
                      <li key={j} className="text-sm text-[#4a4a4a] leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
