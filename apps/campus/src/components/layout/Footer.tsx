// プライバシーポリシーは提供元 NINJAPAN のコーポレートサイトで管理しているため絶対URLで参照する
// TODO: 法務確認後、CABUILDキャンパス専用のプライバシーポリシーが公開されたらURLを差し替える
const footerLinks = [
  { label: 'プライバシーポリシー', href: 'https://www.nin-japan.com/privacy_policy/', external: true },
  { label: 'お問い合わせ', href: '#contact', external: false },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* ロゴ */}
        <div className="flex flex-col items-center sm:items-start gap-3 sm:-ml-[15px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/campus-logo.png"
            alt="CABUILDキャンパス"
            className="h-[34px] object-contain -ml-[20px]"
          />
          <p className="text-xs text-gray-500">
            提供：NINJAPAN株式会社（ODKソリューションズグループ）
          </p>
        </div>

        {/* リンク + コピーライト */}
        <div className="flex flex-col items-center sm:items-end gap-2">
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} NINJAPAN株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
