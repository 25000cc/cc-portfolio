import Link from 'next/link';
import Image from 'next/image';
import { getWorkList } from '../../libs/microcms';

export default async function About() {
  const { contents } = await getWorkList()

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className="text-center">
      <div className="w-full text-left inline-block max-w-full">
        <ul className='list-none pl-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {contents.map((post) => {
            return (
              <li key={post.id}>
                <div className='m-2 top-0'>
                  <Link href={`/works/${post.id}`}>
                    <img className='w-full rounded-md' src={post.eyeCatch.url} alt="" />
                    <h1 className="text-base">{post.title}</h1>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}
