---
title: 📝エクスプレッション備忘録
date: 2024-02-27 05:09:56 +0000 UTC
tags:
  - movie
---

# 時間をフレーム数に
timeToFrames関数を使う。

# 特定の文字の登場回数を取得
```javascript
var count = (text.match(/あ/g) || []).length;
var count = (text.match(new RegExp(targetStr, "g")) || []).length; // 変数で指定したい場合
```

# 文字列の切り出し
```javascript
text.slice(n, m)
```

# テキストのスタイルを取得
```javascript
textLayer.text.sourceText.getStyleAt(0, 0)
```

# コマ落ちさせる
```javascript
PosterizeTime(15)
value
```

# 文字列から数字のみを抽出
コンポ名から数字のみを取り出す際に使用。

```javascript
var compName = thisComp.name
compName.replace(/[^0-9\.]/g, '');
```