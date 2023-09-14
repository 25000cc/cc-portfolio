import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";

const getFormattedDate = (date: Date, format: string) => {
  const symbol = {
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  };

  const formatted = format.replace(/(M+|d+|h+|m+|s+)/g, (v) =>
    ((v.length > 1 ? "0" : "") + symbol[v.slice(-1) as keyof typeof symbol]).slice(-2)
  );

  return formatted.replace(/(y+)/g, (v) =>
    date.getFullYear().toString().slice(-v.length)
  );
};

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="text-center">
      <article className="w-[640px]	text-left inline-block max-w-full">
        <header>
          <h1 className="text-2xl">{post.title}</h1>
          <div className="text-sm	text-gray-600 mt-2.5">
            <div>
              <span className="inline-block	w-16">公開</span>
              <time>{getFormattedDate(new Date(post.createdAt), 'yyyy-MM-dd hh:mm')}</time>
            </div>
            <div>
              <span className="inline-block	w-16">更新日時</span>
              <time>{getFormattedDate(new Date(post.updatedAt), 'yyyy-MM-dd hh:mm')}</time>
            </div>
          </div>
        </header>
        <div className="mt-3">{parse(post.body)}</div>
      </article>
    </div>
  );
}