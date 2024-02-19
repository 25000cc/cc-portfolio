import Link from "next/link";
import { getTagPosts, getTags } from "@/libs/posts";

export async function generateStaticParams() {
  const tags = getTags()

  const paths = tags.map((tag) => {
    return {
      tagId: tag
    }
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { tagId },
}: {
  params: { tagId: string };
}) {
  const tagPosts = getTagPosts(tagId)
  tagPosts.reverse()

  return (
    <div className="text-center">
      <div className="w-[640px]	text-left inline-block max-w-full">
        <h1><Link key={'Tags'} href={'/blogs/tags'} className="underline">Tags</Link> / {tagId}</h1>
        <ul className='list-none pl-0'>
          {tagPosts.map((post) => (
            <p key={post.slug} className="m-0 a">
              <Link href={`/blogs/${post.slug}`}>{post.data.title}</Link>
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
}