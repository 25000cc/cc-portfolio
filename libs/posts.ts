import matter from 'gray-matter'
import fs from 'fs';

const postsFiles = fs.readdirSync(`posts/`, 'utf-8');

export function getTags() {
  const tags = []
  for (let i = 0; i < postsFiles.length; i++) {
    const fileContent = fs.readFileSync(`posts/${postsFiles[i]}`, 'utf-8');
    const { data, content } = matter(fileContent);
    tags.push(...data.tags)
  }
  return Array.from(new Set(tags));
}

export function getAllTagNum() {
  const tags = getTags()
  const tagData = []
  const tagPostsNum = Array(tags.length).fill(0)
  for (let j = 0; j < tags.length; j++) {
    let tmpN = 0
    for (let i = 0; i < postsFiles.length; i++) {
      const fileContent = fs.readFileSync(`posts/${postsFiles[i]}`, 'utf-8');
      const { data, content } = matter(fileContent);
      if (data.tags.includes(tags[j])) {
        tmpN++
      }
    }
    tagData.push({ name: tags[j], num: tmpN })
  }

  tagData.sort((a, b) => a.num > b.num ? -1 : 1)
  return tagData;
}

export function getTagPosts(tag: string) {
  const posts = []
  for (let i = 0; i < postsFiles.length; i++) {
    const fileContent = fs.readFileSync(`posts/${postsFiles[i]}`, 'utf-8');
    const { data, content } = matter(fileContent);
    // もしタグが含まれる記事なら
    if (data.tags.includes(tag)) {
      posts.push({
        data: data,
        slug: postsFiles[i].slice(0, -3)
      })
    }
  }
  return posts;
}