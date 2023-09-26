import { notFound } from "next/navigation";
import { getWorkDetail, getWorkList } from "../../libs/microcms";

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
        <div className="relative group">
          <a href={post.link} target="_blank" rel="noopener noreferrer"><img className="mt-4 hover:brightness-50 duration-200 rounded-md" src={post.eyeCatch.url} alt="" /></a>
          <div className='hidden group-hover:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" /></svg>
            <p className='text-white font-bold m-0 ml-1'>動画を再生</p>
          </div>
        </div>
        <p>{post.description}</p>
        <div className="columns-2 mt-4">
          <img className="rounded-md" src={post.images[0].url} alt="" />
          <img className="rounded-md" src={post.images[1].url} alt="" />
        </div>
        <div className="columns-2 mt-4">
          <img className="rounded-md" src={post.images[2].url} alt="" />
          <img className="rounded-md" src={post.images[3].url} alt="" />
        </div>
      </article>
    </div>
  );
}