import { getFormattedDate } from "@/utils/utils";
import fs from 'fs';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown';

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

  return (
    <div className="text-center">
      <article className="w-[640px]	text-left inline-block max-w-full">
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
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}