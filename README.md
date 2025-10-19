# HolidayFinder

> 「何をしようか迷う休日に、外でも家でも楽しめる過ごし方を提案してくれる」

HolidayFinderは、シンプルな操作で休日の過ごし方のアイデアを提供してくれるWebアプリケーションです。

## アプリケーションURL
https://holiday-finder-one.vercel.app/

## 🚀 主な機能

- **ランダム提案**: ボタンを1つ押すだけで、ランダムに選ばれた休日の過ごし方を提案します。
- **ジャンル別提案**: 「外出」「家」「リフレッシュ」「学び」といったカテゴリから、気分に合ったジャンルの提案を受け取ることができます。

## 🛠️ 技術スタック

このプロジェクトは以下の技術を使用して構築されています。

- **フレームワーク**: [Next.js](https://nextjs.org/) (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **リンター/フォーマッター**: [Biome](https://biomejs.dev/)
- **データ**: ローカルJSON (`/public/ideas.json`)

## ⚙️ セットアップと実行方法

1.  **依存関係のインストール:**
    プロジェクトに必要なパッケージをインストールします。
    ```bash
    npm install
    ```

2.  **開発サーバーの起動:**
    Next.jsの開発サーバーを起動します。
    ```bash
    npm run dev
    ```

3.  **ブラウザで確認:**
    ブラウザで [`http://localhost:3000`](http://localhost:3000) を開いてアプリケーションにアクセスします。

## 📂 ディレクトリ構成

主要なディレクトリとファイルは以下の通りです。

```
holiday-finder/
├─ next/
│  ├─ src/
│  │  ├─ app/
│  │  │  ├─ page.tsx              # ホーム画面 (ランダム提案)
│  │  │  ├─ genres/
│  │  │  │  └─ page.tsx           # ジャンル選択画面
│  │  │  └─ components/
│  │  │     ├─ IdeaCard.tsx       # 提案カードコンポーネント
│  │  │     └─ Header.tsx         # 共通ヘッダー
│  │  └─ public/
│  │     └─ ideas.json            # 提案データ
├─ document.md
└─ README.md
```

---
