import Link from 'next/link';
import Image from 'next/image';
import { getWorkList } from '../libs/microcms';
import { Pagination } from '../components/Pagination'

export default async function About() {
  const data = await getWorkList()

  const contents = data.contents
  const totalCount = data.totalCount

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className="text-center">
      <div className="w-full text-left inline-block max-w-full">
        <ul className='list-none pl-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6'>
          {contents.map((post) => {
            return (
              <li key={post.id}>
                <div className='bg-white m-2 top-0 p-3 rounded-md'>
                  <Link href={`/${post.id}`}>
                    <div className='relative group'>
                      <img className='w-full rounded-md group-hover:brightness-[0.5]' src={post.eyeCatch.url} alt="" />
                      <div className='hidden group-hover:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
                        <p className='text-white font-bold m-0 ml-1'>作品を見る</p>
                      </div>
                    </div>
                    <h1 className='text-gray-400 text-sm m-2'>{post.date.slice(0, 7)}</h1>
                    <h1 className="text-base m-2">{post.title}</h1>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
        {/* <Pagination totalCount={totalCount} perRage={contents.length}></Pagination> */}
      </div>
    </div>
  )
}
