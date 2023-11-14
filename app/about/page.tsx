import Image from 'next/image';

export default function About() {
  return (
    <div className="text-center">
      <div className="w-[640px]	text-left inline-block max-w-full">
        <div className="flex flex-col sm:flex-row items-start">
          <img className="rounded-[200px] m-auto sm:m-0" src="https://images.microcms-assets.io/assets/f5e60180b6054e0eb4e7abe02497b919/bb0dc6f82ef34343af37189289a8fedb/profile.png" alt="" width="200" height="200"/>
          <div className="sm:ml-8 sm:mt-0 mt-4">
            <h1>Main Works</h1>
            <p>動画編集・映像制作・プログラミング</p>
            <h1>Profile</h1>
            <p>主にMVなどの映像を制作します。プログラミングは趣味程度。AEスクリプト、Web、スクレイピング等。</p>
            <h1>Skills</h1>
            <ul>
              <li>After Effects, Premiere Pro, Photoshop</li>
              <li>ExtendScript</li>
              <li>HTML5, CSS, JavaScript, Next.js, TailwindCSS</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}