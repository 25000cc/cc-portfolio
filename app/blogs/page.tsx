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
            <li key={post.slug}>
              <h1 className="text-2xl"><Link href={`/blogs/${post.slug}`}>{post.frontMatter.title}</Link></h1>
              <p className='text-gray-500 mt-1'>公開 : {getFormattedDate(post.frontMatter.date)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}