import Link from 'next/link';
import { getList } from '../../libs/microcms';
import { client } from '../../libs/client';

export default async function Blogs() {
  const { contents } = await getList()
  // const { contents } = await client.get({
  //   endpoint: 'blog',
  // })

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <>
      <h1>{contents.length}</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}