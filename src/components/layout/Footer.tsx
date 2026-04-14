import Image from 'next/image'

const footerLinks = [
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: 'お問い合わせ', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* ロゴ */}
        <div className="flex flex-col items-center sm:items-start gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CABUILD"
              width={90}
              height={24}
              className="h-6 object-contain"
            />
            <span className="text-sm font-medium text-gray-500">キャンパス</span>
          </div>
          <p className="text-xs text-gray-500">
            提供：株式会社ポトス（ODKソリューションズグループ）
          </p>
        </div>

        {/* リンク + コピーライト */}
        <div className="flex flex-col items-center sm:items-end gap-2">
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} 株式会社ポトス. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
