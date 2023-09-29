---
title: 📝Gitユーザーを簡単に切り替える方法
date: 2023-09-29 22:25:33 +0000 UTC
tags:
  - program
---


# 自作のコマンドで一発で切り替え
Mac の場合は .zshrc を開いて下記を記載する

```shell
function gitWork() {
  git config --global user.name "WorkName"
  git config --global user.email hogehoge@gmail.com
  exit /b
}

function gitPri() {
  git config --global user.name "PrivateName"
  git config --global user.email hugahuga@gmail.com
  exit /b
}
```

Windows の場合は gitWork.bat と gitPri.bat を作成し C:\Windows\System32\ に配置する。中身は同じ感じで書く。

あとはそれぞれの切り替えたいアカウントのコマンドを打てば切り替えができるようになる

```shell-session
$ gitWork
$ gitPri
```

# 今のgitユーザーの確認方法
```shell-session
$ git config user.name
$ git config user.email
```

# GitHub と接続するための別の鍵を用意する
~/.ssh 内にサブディレクトリを用意して鍵を生成。-Cのコメント部分には、 GitHubに登録しているメールアドレスを指定する。

```shell-session
$ ssh-keygen -t rsa -b 4096 -C "hogehoge@gamil.com" -f ~/.ssh/cc/id_rsa
```

生成された鍵を GitHub に登録。

# 接続確認
```shell-session
$ ssh -i ~/.ssh/cc/id_rsa -T git@github.com
```

これでどの GitHub アカウントで接続してるか確認できる。

# ~/.ssh/configを編集
```shell-session
Host github.com-private
  HostName github.com
  User git
  Port 22
  IdentityFile ~/.ssh/id_rsa
  TCPKeepAlive yes
  IdentitiesOnly yes
Host github.com-work
  HostName github.com
  User git
  Port 22
  IdentityFile ~/.ssh/cc/id_rsa
  TCPKeepAlive yes
  IdentitiesOnly yes
```

Windows は config のプロパティ > セキュリティ > 詳細設定 > 継承の無効化 > 上のやつ選択 > Everyoneを削除 > 適用 ってしてやらないと Bad owner or permissions on C:\\Users\\c/.ssh/config みたいなエラーが返ってくる。

# あとは clone や remote のときに ssh を指定して
```shell-session
$ git clone github.com-work:username/repo.git
$ git remote add origin github.com-work:username/repo.git
```

# commit 前に gitWork か gitPri を打てば
OK。

refs:
- 📝[githubアカウント切り替えを簡単にする方法](https://zenn.dev/manhattan_code/articles/0317_engineer_community)
- 📝[GitHubで複数アカウントを使い分ける方法](https://www.wakuwakubank.com/posts/380-git-multiple-account/)