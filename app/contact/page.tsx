export default function About() {
  return (
    <div className="text-center">
      <div className="w-[640px]	text-left inline-block max-w-full">
        <h1>お問い合わせ</h1>
        <p>お問い合わせのご返信には、少々お時間を頂く場合がございます。ご了承のほどよろしくお願いいたします。</p>
        <p className="text-gray-500">※入力項目はすべて必須となります。</p>
        <form className="mt-8" name="contact_form" method="POST" data-netlify="true">
          <p>
            <input className="border-solid border w-full py-4 px-2.5" type="text" name="name" required placeholder='NAME［氏名 / ハンドルネーム］' />
          </p>
          <p>
            <input className="border-solid border w-full py-4 px-2.5" type="email" name="email" required placeholder='MAIL ADDRESS［メールアドレス］' />
          </p>
          <p>
            <input className="border-solid border w-full py-4 px-2.5" type="text" name="title" required placeholder='TITLE［件名］' />
          </p>
          <p>
            <textarea className="border-solid border w-full h-80 py-4 px-2.5" name="message" required placeholder="MESSAGE［お問い合わせ内容］"></textarea>
          </p>
          <p className="text-center">
            <button className="bg-slate-800 text-white w-60 h-10" type="submit">SEND</button>
          </p>
        </form>
      </div>
    </div>
  )
}