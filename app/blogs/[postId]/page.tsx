import { getFormattedDate } from "@/utils/utils";
import Link from "next/link";
import fs, { link } from 'fs';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { customCode } from "@/components/articleComponents";
import SnsBtn from "@/components/SnsBtn";

export async function generateStaticParams() {
  const files = fs.readdirSync('posts')

  const paths = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    return {
      postId: slug
    }
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const fileContent = fs.readFileSync(`posts/${postId}.md`, 'utf-8');
  const { data, content } = matter(fileContent);

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${postId}`

  return (
    <div className="text-center">
      <article className="w-[720px] max-w-full	text-left inline-block">
        <header>
          <h1 className="text-2xl">{data.title}</h1>
          <div className="text-gray-500 text-sm mt-2.5">
            <div>
              <span className="inline-block	w-10">公開</span>
              <time>{getFormattedDate(data.date)}</time>
            </div>
          </div>
        </header>
        <div className="mt-3">
          <ReactMarkdown className="blog"
            remarkPlugins={[remarkGfm]}
            components={{
              code: customCode,
              a: props => {
                if (props.href?.startsWith('http')) {
                  return <a href={props.href} target="_blank" rel="noopener noreferrer">
                    {props.children}
                  </a>
                } else {
                  return <Link href={props.href!}>{props.children} </Link>
                }
              }
            }}
          >{content}</ReactMarkdown>
        </div>
        <footer>
          <p><strong>Tags:</strong></p>
          <ul>
            {data.tags.map((tag: any) => (
              <li key={tag}>
                <Link href={`/blogs/tags/${tag}`} className="a">
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
          <SnsBtn url={url} title={data.title}></SnsBtn>
        </footer>
      </article>
    </div>
  );
}