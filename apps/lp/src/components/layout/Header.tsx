'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'CABUILDキャンパスとは', href: '#about' },
  { label: '機能', href: '#features' },
  { label: '使い方', href: '#howto' },
  { label: 'よくある質問', href: '#faq' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-bold text-[#299dd9]">CABUILD</span>
          <span className="text-sm font-medium text-gray-500">キャンパス</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 hover:text-[#299dd9] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://campus.cabuild.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded text-sm font-medium text-white bg-[#299dd9] hover:bg-[#2490cc] transition-colors duration-200"
        >
          無料ではじめる
        </a>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 hover:text-[#299dd9] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://campus.cabuild.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-5 rounded text-sm font-medium text-white bg-[#299dd9] hover:bg-[#2490cc] transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            無料ではじめる
          </a>
        </div>
      )}
    </header>
  )
}
