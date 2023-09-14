import { notFound } from "next/navigation";
import { getWorkDetail, getWorkList } from "../../../libs/microcms";
import Link from "next/link";

export async function generateStaticParams() {
  const { contents } = await getWorkList();

  const paths = contents.map((post) => {
    return {
      projectId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticWorkDetailPage({
  params: { projectId },
}: {
  params: { projectId: string };
}) {
  const post = await getWorkDetail(projectId);

  if (!post) {
    notFound();
  }

  return (
    <div className="text-center">
      <article className="w-[960px]	text-left inline-block max-w-full">
        <h1>{post.title}</h1>
        <Link href={post.link}><img className="mt-4" src={post.eyeCatch.url} alt="" /></Link>
        <p>{post.description}</p>
        <div className="columns-2 mt-4">
          <img src={post.images[0].url} alt="" />
          <img src={post.images[1].url} alt="" />
        </div>
        <div className="columns-2 mt-4">
          <img src={post.images[2].url} alt="" />
          <img src={post.images[3].url} alt="" />
        </div>
      </article>
    </div>
  );
}