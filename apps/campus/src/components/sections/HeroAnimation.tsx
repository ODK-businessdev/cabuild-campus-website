'use client'

import { useEffect, useRef } from 'react'

const seq = [
  { id: 'm1', cursor: 'c1', pre: 667, type: 833 },
  { id: 'm2', pre: 583 },
  { id: 'm3', cursor: 'c3', pre: 667, type: 750 },
  { id: 'm4', pre: 583 },
  { id: 'm5', cursor: 'c5', pre: 750, type: 917 },
  { id: 'm6', pre: 667 },
]

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms))
}

export default function HeroAnimation() {
  const refs = useRef<Record<string, HTMLElement | null>>({})
  const cancelled = useRef(false)

  const setRef = (key: string) => (el: HTMLElement | null) => {
    refs.current[key] = el
  }

  useEffect(() => {
    cancelled.current = false

    async function run() {
      while (!cancelled.current) {
        seq.forEach((s) => {
          refs.current[s.id]?.classList.remove('show')
          if (s.cursor) {
            const c = refs.current[s.cursor]
            if (c) c.style.display = 'none'
          }
        })

        await sleep(500)

        for (const s of seq) {
          if (cancelled.current) return
          await sleep(s.pre)
          refs.current[s.id]?.classList.add('show')
          if (s.cursor) {
            const c = refs.current[s.cursor]
            if (c) c.style.display = 'inline-block'
            await sleep(s.type ?? 0)
            if (c) c.style.display = 'none'
          }
        }

        await sleep(2500)
      }
    }

    run()
    return () => { cancelled.current = true }
  }, [])

  return (
    <>
      <style>{`
        .ha-row {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .ha-row.show { opacity: 1; transform: translateY(0); }
        .ha-cursor {
          display: inline-block;
          width: 2px;
          height: 12px;
          background: #1a1a1a;
          margin-left: 2px;
          vertical-align: middle;
          animation: ha-blink 0.8s infinite;
        }
        @keyframes ha-blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      <div style={{ background: '#f5f5f7', borderRadius: '16px', padding: '16px', width: '100%', maxWidth: '520px', margin: '0 auto' }}>
        <div style={{ background: '#fff', borderRadius: '12px', border: '0.5px solid #e0e0e0', overflow: 'hidden' }}>

          {/* ヘッダー */}
          <div style={{ padding: '12px 14px 8px', borderBottom: '0.5px solid #eee' }}>
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', margin: 0 }}>自己分析 — 大学時代</p>
            <p style={{ fontSize: '11px', color: '#888', margin: '2px 0 0' }}>Situation（状況）</p>
          </div>

          {/* チャット本体 */}
          <div style={{ padding: '12px', minHeight: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>

            <div ref={setRef('m1')} className="ha-row">
              <AiIcon />
              <div style={baiStyle}>
                大学時代、なぜサッカーを続けられたと思いますか？
                <span ref={setRef('c1')} className="ha-cursor" style={{ display: 'none' }} />
              </div>
            </div>

            <div ref={setRef('m2')} className="ha-row" style={{ justifyContent: 'flex-end' }}>
              <div style={buStyle}>うまくなりたかったわけじゃないけど、なんとなく</div>
            </div>

            <div ref={setRef('m3')} className="ha-row">
              <AiIcon />
              <div style={baiStyle}>
                「なんとなく」の正体は何だと思いますか？
                <span ref={setRef('c3')} className="ha-cursor" style={{ display: 'none' }} />
              </div>
            </div>

            <div ref={setRef('m4')} className="ha-row" style={{ justifyContent: 'flex-end' }}>
              <div style={buStyle}>多分チームが好きだったのかも。誰かと一緒にいる感じ</div>
            </div>

            <div ref={setRef('m5')} className="ha-row">
              <AiIcon />
              <div style={resultStyle}>
                <div style={{ fontSize: '11px', color: '#2BBFA8', fontWeight: 500, marginBottom: '4px' }}>分析</div>
                それ、&quot;人と一緒に何かを作ること&quot;が原動力なんですね。
                <span ref={setRef('c5')} className="ha-cursor" style={{ display: 'none' }} />
              </div>
            </div>

            <div ref={setRef('m6')} className="ha-row" style={{ justifyContent: 'flex-end' }}>
              <div style={buStyle}>言われてみれば、ずっとそうだったかも！例えば、大会前の合宿で・・・</div>
            </div>

          </div>

          {/* 入力エリア */}
          <div style={{ padding: '10px 14px', borderTop: '0.5px solid #eee', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ flex: 1, fontSize: '13px', color: '#aaa' }}>メッセージを入力...</div>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2BBFA8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#fff"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function AiIcon() {
  return (
    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#2BBFA8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ color: '#fff', fontSize: '10px', fontWeight: 500 }}>AI</span>
    </div>
  )
}

const baiStyle: React.CSSProperties = {
  background: '#eff4f2',
  borderRadius: '4px 12px 12px 12px',
  padding: '10px 14px',
  fontSize: '13px',
  color: '#1a1a1a',
  lineHeight: 1.6,
  maxWidth: '320px',
}

const buStyle: React.CSSProperties = {
  background: '#d6eeea',
  borderRadius: '12px 4px 12px 12px',
  padding: '10px 14px',
  fontSize: '13px',
  color: '#1a1a1a',
  lineHeight: 1.6,
  maxWidth: '300px',
}

const resultStyle: React.CSSProperties = {
  background: '#eff4f2',
  borderRadius: '4px 12px 12px 12px',
  padding: '10px 14px',
  fontSize: '13px',
  color: '#1a1a1a',
  lineHeight: 1.6,
  maxWidth: '320px',
}
