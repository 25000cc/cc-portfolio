export default function About() {
  return (
    <div className="text-center">
      <div className="w-[640px]	text-left inline-block max-w-full">
        <div className="flex flex-col sm:flex-row items-start">
          <img className="rounded-[200px] m-auto sm:m-0" src="/profile.png" alt="" width="200" height="200"/>
          <div className="sm:ml-8 sm:mt-0 mt-4">
            <h1>Main Works</h1>
            <p>動画編集・映像制作・プログラミング</p>
            <h1>Profile</h1>
            <p>高校生の頃から動画編集やプログラミングにハマり、情報系の大学に進学。クラウドソーシングサイトを利用して映像の仕事を受けるように。</p>
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