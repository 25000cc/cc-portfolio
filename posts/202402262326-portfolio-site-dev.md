---
title: 💻ポートフォリオサイト開発
date: 2024-02-26 23:26:36 +0000 UTC
tags:
  - program
---

# About
このサイトの開発についてメモ

# 開発目的
- 映像のポートフォリオサイトとして使うため
- プログラミングの練習に

# 要件定義
- 気軽に連絡できるようなサイトにしたい
  - コンタクトページをシンプルに
- トップページはShowReelを流したい
- 無駄なアニメーションはゼロに。あっても0.2sぐらいで。
- 案件を簡単に追加できるようにしたい
- ブログも書きたい

## ページ構成
- Top
  - Works
    - 各案件の詳細ページ
  - Blogs
    - 各ブログ記事
    - タグページ
      - 各タグページ
  - About
  - Contact

## 参考サイト
- [https://cumulo.works/](https://cumulo.works/)  
Cumuloworks氏のポートフォリオサイト。シンプルで軽くてカッコいい。Vercel、Next.js、Tailwind CSS、MicroCMS・Formspreeを使ってるらしい。  
カッコよかったのでCumuloworks氏と近い技術を自分も使ってみる。

> ChatGPTに教えてもらいながら、技術的には  
> Vercel、Next.js、Tailwind CSS、MicroCMS・Formspreeを使ってます。Jamstackってやつ？できてる？？？

引用元ツイート：[https://twitter.com/cumuloworks/status/1691439359348895744?s=20](https://twitter.com/cumuloworks/status/1691439359348895744?s=20)

# 技術選定
- [Next.js](/blogs/202309270930-next-js)
- [Tailwind CSS](/blogs/202309270950-tailwindcss)
- MicroCMS
- [Netlify](/blogs/202309270827-netlify)

# Todo
- Worksページのページネーションの実装
- ブログの記事をNotionみたいに階層構造にする
  - 記事が増えてきたら
- トップページを実装してShowReelを流すようにする
  - そのためにはまずShowReelを作らなければ……