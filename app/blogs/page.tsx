import Link from 'next/link';
import { getFormattedDate } from "@/utils/utils";
import fs from 'fs';
import matter from 'gray-matter'

export default async function Blogs() {
  const files = fs.readdirSync('posts')
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug
    }
  });

  return (
    <div className="text-center">
      <div className="w-[640px]	text-left inline-block max-w-full">
        <ul className='list-none pl-0'>
          {posts.map((post) => (
            <Link href={`/blogs/${post.slug}`}>
              <li key={post.slug} className='bg-white px-6 py-4 rounded-xl'>
                <h1 className="text-2xl">{post.frontMatter.title}</h1>
                <p className='text-gray-500 mt-1 mb-1'>公開 : {getFormattedDate(post.frontMatter.date)}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}