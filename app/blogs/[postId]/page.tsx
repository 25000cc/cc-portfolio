import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";
import { getFormattedDate } from "@/utils/utils";

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
          <div className="text-gray-500 text-sm mt-2.5">
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