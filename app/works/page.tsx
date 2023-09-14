import Link from 'next/link';
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
                <Link href={`/works/${post.id}`}>
                  <div className='p-2 top-0'>
                    <img className='w-full' src={post.eyeCatch.url} alt="" />
                    <h1 className="text-lg">{post.title}</h1>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}
