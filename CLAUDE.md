# CLAUDE.md: CABUILDキャンパス サービスサイト 開発ガイドライン

## 0. 言語設定

**重要: すべての応答は日本語で行ってください**

- Claude は**常に日本語**で応答すること
- コード内のコメントも日本語で記述
- コミットメッセージも日本語で記述
- 技術用語は英語のまま使用可能（例: Next.js, TypeScript, Tailwind CSS）
- エラーメッセージや説明は必ず日本語で提供

---

## 1. プロジェクトの目的

このプロジェクトは、**CABUILDキャンパスの学生向けプロモーションサイト**です。

**キャッチコピー:** 「就活は、出会いだ。」

**コンセプト:** 自分との出会い → 企業との出会いの2層構造

**ターゲットペルソナ:**
- 東洋大学 経済学部・3年・男性・指定校推薦・ISFJ-A
- やりたいことがない・夢がない・「なんとかなる」感覚の平和主義
- コツコツ継続が得意だが自分では気づいていない
- 青学の友人に刺激されて就活を意識し始めた
- サイト訪問時期：3年生 6〜8月・就活への焦りがある状態

**あなたの役割:**
あなたはこのプロダクトの**シニア・ペアプログラマー**です。**品質**、**デザイン**、**ユーザー体験**を最優先とし、学生が「自分のことだ」と感じる温かみのあるサービスサイトを実装してください。

---

## 1.5. ドメイン・配信構成（重要）

このリポジトリは **モノレポ構成** で、`apps/campus`（学生向けサイト）と `apps/lp`（LP）を持つ。`cabuild.jp` 自体は **別リポジトリ・別 Vercel プロジェクトの企業サイト** で、その `vercel.json` の rewrites で各サブパスを当リポジトリの Vercel プロジェクトに転送している。

### 配信URLとリポジトリ・プロジェクトの対応

| 公開URL | 配信元 Vercel プロジェクト | 当リポジトリ内のアプリ | basePath |
|---|---|---|---|
| `cabuild.jp/campus/*` | `cabuild-campus-website.vercel.app` | `apps/campus` | `/campus` |
| `cabuild.jp/campus/lp/*` | `cabuild-campus-website-lp.vercel.app` | `apps/lp` | `/campus/lp` |
| `cabuild.jp/*`（その他） | 企業サイト（別リポジトリ） | - | - |

### 企業サイト側の rewrite 設定（参考・別リポジトリ）

```json
{
  "rewrites": [
    { "source": "/campus/lp/:path*", "destination": "https://cabuild-campus-website-lp.vercel.app/campus/lp/:path*" },
    { "source": "/campus/:path*",    "destination": "https://cabuild-campus-website.vercel.app/campus/:path*" }
  ]
}
```

### 開発時の注意点

- リダイレクト・404・CORS 等の問題が発生したら **「企業サイト → rewrite → campus/LP」の3層構造** で考える
- `trailingSlash` の設定変更時は企業サイト側の挙動（trailing slash 除去）と衝突しないか注意（過去にループ事故あり）
- 画像やAPI など deep path を扱うときは rewrite 経由でも到達できるか curl で必ず確認
- `apps/campus` には `skipTrailingSlashRedirect: true` を設定済み（API ルートの 308 ループ回避のため）
- 公開画像は `public/campus/...` または `public/campus/lp/...` 配下に配置（`/campus/xxx` の URL で配信されるため）
- 企業サイトの `vercel.json` 編集は**別リポジトリでの作業**

---

## 2. 開発の優先順位

**最優先 (Must Have):**

1. **デザイン品質:** 清潔感のあるスマートカジュアルなデザイン
2. **型安全性:** TypeScript の厳格な型チェック
3. **SEO:** メタデータ、OGP、構造化データの適切な設定
4. **パフォーマンス:** Core Web Vitals の最適化
5. **レスポンシブ:** モバイル・タブレット・デスクトップ対応

**重要 (Should Have):**

- **アクセシビリティ:** WCAG 準拠、適切な aria 属性
- **お問い合わせフォーム:** バリデーション、送信機能
- **アニメーション:** 控えめで洗練されたトランジション（200-300ms）
- **MicroCMS 連携:** ユーザーの声・FAQ・ニュースの動的取得

**後回し可能 (Nice to Have):**

- 高度なアニメーション効果
- 多言語対応
- ダークモード

---

## 3. 主要技術スタック

| カテゴリ | 技術 |
|---|---|
| フレームワーク | Next.js（App Router） |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| UIコンポーネント | shadcn/ui |
| フォーム | React Hook Form + Zod |
| アイコン | Lucide React |
| CMS | MicroCMS |
| ホスティング | Vercel |
| ソース管理 | GitHub（ODK-businessdev/cabuild-campus-website） |

---

## 4. ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx               # ルートレイアウト（フォント・OGP設定）
│   ├── page.tsx                 # トップ（各セクション呼び出し）
│   └── privacy/
│       └── page.tsx             # プライバシーポリシー
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/                # セクションコンポーネント
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowToSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                      # shadcn/ui
├── lib/
│   ├── utils.ts
│   └── microcms.ts              # MicroCMS クライアント
└── types/
    └── microcms.ts              # コンテンツ型定義
```

---

## 5. デザインガイドライン

### デザイン哲学

1. **引き算のデザイン** - 複数の技法を弱く適用するより、1-2つの技法を強力に選択
2. **テンプレート感の排除** - AI 生成・テンプレート的な見た目を徹底的に避ける
3. **学生に寄り添うトーン** - 「難しそう」ではなく「自分でもできそう」と感じさせる
4. **タイポグラフィ・ファースト** - 階層と可読性を最優先

### 避けるべきパターン

- 過度なグラデーション（特別な CTA のみ許可）
- 過剰なボックスシャドウ（`shadow-2xl` など）
- 多色使用（メインブルー + アクセントグリーン + グレースケール以外）
- 過度なアニメーション
- `rounded-lg` の多用（基本は `rounded`(4px)）
- 不必要なコンテナの入れ子

### 推奨パターン

- ソリッドなブルー（`#299dd9`）をアクセントに
- 淡いグリーン（`#8fc23f`）は補助的に使用
- 微細な境界線（`border border-gray-200`）
- 控えめなトランジション（200-300ms）
- 8の倍数ベースのスペーシング
- 小さめの角丸（4px-8px 基本）

---

## 6. カラーパレット

```typescript
const colors = {
  // プライマリ（ブルー系）
  primary: {
    DEFAULT: '#299dd9', // メインカラー
    hover:   '#2490cc',
    light:   '#7ac4ea',
    pale:    '#b8dff4',
    bg:      '#edf7fd',
  },
  // アクセント（グリーン系・淡め使用）
  accent: {
    DEFAULT: '#8fc23f',
    hover:   '#82b238',
    light:   '#b8d97e',
    bg:      '#f3f9e8',
  },
  // グレースケール
  gray: {
    900: '#1a1a1a', // メインテキスト
    700: '#4a4a4a', // サブテキスト
    500: '#808080', // 補足テキスト
    200: '#e5e5e5', // ボーダー
    100: '#f5f5f5', // 薄い背景
    50:  '#fafafa', // 背景
  },
  // セマンティック
  success: '#10B981',
  error:   '#EF4444',
  warning: '#F59E0B',
}
```

---

## 7. タイポグラフィ

**フォント:**
- 見出し: `'Zen Kaku Gothic New', sans-serif`
- 本文: `'Noto Sans JP', sans-serif`

| 用途 | サイズ | Tailwind | ウェイト |
|---|---|---|---|
| ヒーロータイトル | 48px | `text-5xl` | `font-bold` |
| ページタイトル | 32px | `text-3xl` | `font-bold` |
| セクション見出し | 24px | `text-2xl` | `font-bold` |
| 小見出し | 20px | `text-xl` | `font-semibold` |
| 本文（強調） | 18px | `text-lg` | `font-medium` |
| 本文 | 16px | `text-base` | `font-normal` |
| 補足 | 14px | `text-sm` | `font-normal` |
| キャプション | 12px | `text-xs` | `font-medium` |

---

## 8. スペーシング（8の倍数ベース）

```
8px   - 密なコンポーネント内部
12px  - アイコンとテキストの間
16px  - 標準的な余白
20px  - カード内パディング
24px  - セクション内余白
32px  - コンポーネント間
40px  - セクション間（小）
48px  - セクション間（中）
64px  - セクション間（大）
80px  - ページセクション間
120px - ヒーロー・大きな区切り
```

---

## 9. border-radius（角丸）

```
4px  - ボタン・入力フィールド・タグ（基本）
8px  - 小さなカード・バッジ
12px - 通常のカード
16px - 大きなカード・モーダル
24px - 特大カード・ヒーロー要素
```

---

## 10. TypeScript 型安全性

- **`any` の使用禁止:** 原則として使用しない
- **`unknown` の活用:** 型が不明な値は `unknown` + 型ガードで処理
- **厳格な型チェック:** `tsconfig.json` で `"strict": true`
- **関数の型定義:** 引数と戻り値の型は常に明示的に定義

---

## 11. コンポーネント設計

- **Server Components を優先:** クライアント側のインタラクションが不要な場合
- **Client Components は最小限:** `'use client'` は必要な箇所のみ
- **Props の型定義:** すべてのコンポーネントで明示的な型定義

---

## 12. SEO・メタデータ

各ページで適切な `metadata` を設定:

```typescript
export const metadata: Metadata = {
  title: 'ページタイトル | CABUILDキャンパス',
  description: 'ページの説明文',
  openGraph: {
    title: 'OGタイトル',
    description: 'OG説明文',
    images: [{ url: '/og-image.png' }],
  },
}
```

---

## 13. GitHub CLI (gh) ワークフロー

**Claude Code 環境では、必ず以下のフルパスを使用してください：**

```bash
/opt/homebrew/bin/gh
```

**リポジトリ:** `ODK-businessdev/cabuild-campus-website`

---

## 14. 開発コマンド

```bash
# 開発サーバー起動
npm run dev
# → http://localhost:3000

# ビルド
npm run build

# リント
npm run lint

# 型チェック
npx tsc --noEmit
```

---

## 15. 開発チェックリスト

### 新機能実装時

- [ ] デザインガイドラインに準拠したデザイン
- [ ] カラーパレットが制約されている（ブルー + グリーン + グレースケール）
- [ ] フォントが Zen Kaku Gothic New（見出し）/ Noto Sans JP（本文）になっている
- [ ] 一貫したスペーシング（8の倍数）
- [ ] 角丸は基本 4px-8px
- [ ] TypeScript の型定義
- [ ] レスポンシブ対応（モバイルファースト）
- [ ] アクセシビリティ考慮（alt, aria）
- [ ] SEO メタデータ設定

### コミット前

- [ ] `npm run lint` でエラーなし
- [ ] `npx tsc --noEmit` で型エラーなし

---

## 16. 仕様書参照

詳細な仕様は `docs/site-design.md` を参照してください。
- ページ構成・セクション設計
- MicroCMS 管理コンテンツ一覧
- セクション別コピーテキスト
- コンポーネント仕様
