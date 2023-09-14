import Link from 'next/link';
import { getList } from '../../libs/microcms';
import { getFormattedDate } from "@/utils/utils";

export default async function Blogs() {
  const { contents } = await getList()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className="text-center">
      <div className="w-[640px]	text-left inline-block max-w-full">
        <ul className='list-none pl-0'>
          {contents.map((post) => {
            return (
              <li key={post.id}>
                <h1 className="text-2xl"><Link href={`/blogs/${post.id}`}>{post.title}</Link></h1>
                <p className='text-gray-500 mt-1'>公開 : {getFormattedDate(new Date(post.createdAt), 'yyyy-MM-dd hh:mm')}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}