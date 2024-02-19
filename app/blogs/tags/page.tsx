import Link from "next/link";
import { getAllTagNum } from "@/libs/posts";

export default async function Tags() {
  const tagData = getAllTagNum()

  return (
    <div className="text-center">
      <div className="w-[640px]	text-left inline-block max-w-full">
        <h1>Tags</h1>
        <ul className='list-none pl-0'>
          {tagData.map((tag, i) => (
            <p className="m-0 a"><Link key={tag.name} href={`/blogs/tags/${tag.name}`}>{tag.name}({tag.num})</Link></p>
          ))}
        </ul>
      </div>
    </div>
  )
}