# cuprite

SEI hoshi（柴崎星汰）の個人サイト。ポートフォリオ・ブログ・経歴を掲載しています。

https://sei-hoshi.com

## 技術スタック

- [Astro.js](https://astro.build/) v4 — SSRフレームワーク
- MDX — ブログ記事の執筆
- Cloudflare Pages — ホスティング
- pnpm — パッケージマネージャー

## ページ構成

| パス | 内容 |
| :--- | :--- |
| `/` | トップページ（最新記事3件表示） |
| `/works` | 制作実績一覧 |
| `/blog` | ブログ記事一覧 |
| `/blog/[slug]` | ブログ記事詳細 |
| `/resume` | 経歴 |

## ディレクトリ構成

```text
src/
├── components/   # 共通コンポーネント
├── content/
│   └── blog/     # ブログ記事（.mdx）
├── layouts/      # ページレイアウト
├── pages/        # ルーティング
├── styles/       # グローバルCSS
├── consts.ts     # サイト定数・制作実績データ
└── types.ts      # 型定義
```

## コマンド

```sh
pnpm install       # 依存関係のインストール
pnpm dev           # 開発サーバー起動（localhost:4321）
pnpm build         # プロダクションビルド
pnpm preview       # ビルド結果のプレビュー
```

## ブログ記事の追加

`src/content/blog/` に `.mdx` ファイルを追加する。

```mdx
---
title: "記事タイトル"
description: "記事の概要"
pubDate: "2024-01-01"
---

本文...
```
