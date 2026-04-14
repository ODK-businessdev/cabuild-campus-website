'use client'

import { useState } from 'react'
import { Brain, Search, Building2, PenLine, Mic, ArrowRight, X } from 'lucide-react'

type Feature = {
  icon: React.ElementType
  title: string
  subtitle: string
  detail: string
  capabilities: string[]
  ctaLabel: string
  comingSoon?: boolean
}

const features: Feature[] = [
  {
    icon: Brain,
    title: '12キャリアタイプ診断',
    subtitle: 'あなたが気づいていない特性も、言葉にする。',
    detail:
      '就活を始めるとき、多くの人が「自分に何が向いているかわからない」という状態からスタートします。12キャリアタイプ診断は、BIG5・職業志向・価値観をもとにあなたを分類し、強み・弱み・向いている職種を明確にします。診断結果は面接でそのまま活用できるレポートとして提供されます。',
    capabilities: [
      '12タイプへの分類',
      '強み・弱み・向いている職種の可視化',
      '面接活用アドバイス付きレポートの提供',
    ],
    ctaLabel: '診断してみる',
  },
  {
    icon: Search,
    title: '自己分析AI',
    subtitle: 'あなたの経験を掘り下げ、就活の軸をつくる。',
    detail:
      'AIが答えを出してくれても、面接では通用しません。自分の言葉で語れないESや志望動機は、面接官にすぐ見抜かれます。CABUILDの自己分析AIは、あなたの経験をSTAR法をもとに問い続けることで、自分では気づけなかった強みや価値観を引き出します。答えを教えるのではなく、あなた自身が納得できる就活の軸をつくることが、このAIの役割です。',
    capabilities: [
      '6ステップによる積み上げ設計',
      'STAR法をベースにした経験の深掘り',
      'Will-Can-Mustの整理',
      '志望動機への連携',
    ],
    ctaLabel: '分析してみる',
  },
  {
    icon: Building2,
    title: '企業研究AI',
    subtitle: 'あなたがまだ知らない、相性の良い企業を見つける。',
    detail:
      '企業研究は重要だとわかっていても、自力で進めるには時間と労力がかかります。企業研究AIは、キーワードで企業を検索し、概要・事業内容・強み・弱み・企業文化・財務情報・最新取り組みをまとめて提供します。知名度ではなくキーワードで探すから、自分では思いつかなかった企業との出会いが生まれます。',
    capabilities: [
      '企業概要・事業内容・強み・弱みの整理',
      '企業文化・財務情報・最新取り組みの提供',
      '志望動機ワークスペースとの連動',
    ],
    ctaLabel: '企業を調べてみる',
  },
  {
    icon: PenLine,
    title: 'ES添削AI',
    subtitle: 'あなたの魅力を伝えるESを、明確な基準で改善する。',
    detail:
      '感覚的な添削ではなく、明確な評価軸に基づいた改善を提供します。論理性・具体性・適切性・表現力の4つの観点でESを評価し、あなたの魅力が採用担当者に正しく伝わるESへと仕上げます。ESの完成度を上げ、面接ではあなたを紹介する最善の資料として役立ちます。',
    capabilities: [
      '4観点（論理性・具体性・適切性・表現力）での評価',
      '結論ファースト構造の確認',
      '数値・事実の有無チェック',
      '設問への適切性の確認',
      '読みやすさ・冗長性の改善',
    ],
    ctaLabel: 'ESを添削してみる',
  },
  {
    icon: Mic,
    title: '面接練習AI',
    subtitle: '本番さながらの練習で、自信をつける。',
    detail: '2026年夏頃リリース予定です。面接練習AIでは、本番さながらの模擬面接をAIと行うことができます。リリースまでしばらくお待ちください。',
    capabilities: [],
    ctaLabel: '',
    comingSoon: true,
  },
]

export default function FeaturesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null)
  const selected = features[selectedIndex]
  const Icon = selected.icon

  return (
    <section id="features" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            具体的に何ができるか
          </h2>
          <p className="text-base text-[#4a4a4a] max-w-xl mx-auto leading-relaxed">
            自己分析から企業研究・ES添削まで、就活準備に必要なツールが一つに。
          </p>
        </div>

        {/* 左右2カラムレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 items-start">

          {/* 左: 機能リスト */}
          <div className="flex flex-col gap-2">
            {features.map((feature, index) => {
              const ItemIcon = feature.icon
              const isActive = selectedIndex === index
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? '#edf7fd' : 'transparent',
                    border: isActive ? '1px solid #b8dff4' : '1px solid transparent',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: isActive ? '#299dd9' : '#f5f5f5' }}
                  >
                    <ItemIcon size={18} color={isActive ? '#ffffff' : '#808080'} />
                  </div>
                  <div className="min-w-0 flex items-center gap-2">
                    <p
                      className="text-sm font-bold truncate"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: isActive ? '#299dd9' : '#1a1a1a',
                      }}
                    >
                      {feature.title}
                    </p>
                    {feature.comingSoon && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium text-white bg-[#8fc23f] shrink-0">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* 右: 選択中の機能詳細 */}
          <div
            className="rounded-2xl border p-8 flex flex-col gap-5 min-h-80"
            style={{ borderColor: '#b8dff4' }}
          >
            {/* ヘッダー */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#edf7fd] flex items-center justify-center shrink-0">
                  <Icon size={24} color="#299dd9" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-[#1a1a1a]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {selected.title}
                  </h3>
                  <p className="text-xs text-[#299dd9] mt-0.5">{selected.subtitle}</p>
                </div>
              </div>
              {!selected.comingSoon && selected.ctaLabel && (
                <a
                  href="https://campus.cabuild.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-10 px-5 rounded text-sm font-medium text-white bg-[#299dd9] hover:bg-[#2490cc] transition-colors duration-200 shrink-0"
                >
                  {selected.ctaLabel}
                  <ArrowRight size={14} />
                </a>
              )}
            </div>

            {/* 詳細テキスト */}
            <p className="text-sm text-[#4a4a4a] leading-relaxed">{selected.detail}</p>

            {/* できること */}
            {selected.capabilities.length > 0 && (
              <div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium text-white bg-[#299dd9] mb-3">
                  できること
                </span>
                <ul className="flex flex-col gap-2">
                  {selected.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4a4a4a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#299dd9] mt-1.5 shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 画面プレビュー（12キャリアタイプ診断） */}
            {selectedIndex === 0 && (
              <div className="mt-2 relative rounded-xl overflow-hidden border border-[#e5e5e5]" style={{ height: '480px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/career-type-assessment-v2.png"
                  alt="12キャリアタイプ診断 アセスメント結果"
                  style={{ width: '100%', display: 'block' }}
                />
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    height: '180px',
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 55%, #ffffff)',
                  }}
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => setModalImage({ src: '/career-type-report-v2.png', title: '12キャリアタイプ診断 レポートサンプル' })}
                    className="inline-flex items-center gap-2 h-10 px-5 rounded text-sm font-medium transition-colors duration-200 shadow-sm"
                    style={{ color: '#299dd9', backgroundColor: '#ffffff', border: '1px solid #299dd9' }}
                  >
                    レポートのサンプルを見る
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* 画面プレビュー（企業研究AI） */}
            {selectedIndex === 2 && (
              <div className="mt-2 relative rounded-xl overflow-hidden border border-[#e5e5e5]" style={{ height: '480px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/company-research-sample.png"
                  alt="企業研究AI 画面サンプル"
                  style={{ width: '100%', display: 'block' }}
                />
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    height: '180px',
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 55%, #ffffff)',
                  }}
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => setModalImage({ src: '/company-research-sample.png', title: '企業研究AI 画面サンプル' })}
                    className="inline-flex items-center gap-2 h-10 px-5 rounded text-sm font-medium transition-colors duration-200 shadow-sm"
                    style={{ color: '#299dd9', backgroundColor: '#ffffff', border: '1px solid #299dd9' }}
                  >
                    レポートのサンプルを見る
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* 画面プレビュー（ES添削AI） */}
            {selectedIndex === 3 && (
              <div className="mt-2 relative rounded-xl overflow-hidden border border-[#e5e5e5]" style={{ height: '480px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/es-correction-sample.png"
                  alt="ES添削AI 画面サンプル"
                  style={{ width: '100%', display: 'block' }}
                />
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    height: '180px',
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 55%, #ffffff)',
                  }}
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => setModalImage({ src: '/es-correction-sample.png', title: 'ES添削AI 画面サンプル' })}
                    className="inline-flex items-center gap-2 h-10 px-5 rounded text-sm font-medium transition-colors duration-200 shadow-sm"
                    style={{ color: '#299dd9', backgroundColor: '#ffffff', border: '1px solid #299dd9' }}
                  >
                    レポートのサンプルを見る
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* 画面プレビュー（自己分析AI） */}
            {selectedIndex === 1 && (
              <div className="mt-2 relative rounded-xl overflow-hidden border border-[#e5e5e5]" style={{ height: '480px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/self-analysis-sample.png"
                  alt="自己分析AI 完了画面"
                  style={{ width: '100%', display: 'block' }}
                />
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    height: '180px',
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 55%, #ffffff)',
                  }}
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => setModalImage({ src: '/self-analysis-sample.png', title: '自己分析AI 完了画面サンプル' })}
                    className="inline-flex items-center gap-2 h-10 px-5 rounded text-sm font-medium transition-colors duration-200 shadow-sm"
                    style={{ color: '#299dd9', backgroundColor: '#ffffff', border: '1px solid #299dd9' }}
                  >
                    レポートのサンプルを見る
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 汎用モーダル */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden flex flex-col"
            style={{ width: '100%', maxWidth: '720px', maxHeight: '88vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] shrink-0">
              <p className="text-sm font-bold text-[#1a1a1a]" style={{ fontFamily: 'var(--font-heading)' }}>
                {modalImage.title}
              </p>
              <button
                onClick={() => setModalImage(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#808080] hover:bg-[#f5f5f5] transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>
            <div className="overflow-y-auto flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={modalImage.src}
                alt={modalImage.title}
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
