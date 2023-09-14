import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSDate,
} from "microcms-js-sdk";
import { client } from './client'

const delay = 1000;

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  body: string;
} & MicroCMSDate;

// Worksの型定義
export type WorksList = {
  id: string;
  title: string;
  eyeCatch: {
    url: string;
  };
} & MicroCMSDate;

export type WorkDetail = {
  id: string;
  title: string;
  eyeCatch: {
    url: string;
  };
  images: {
    url: string;
  }[]
  link: string;
  description: string;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// ブログ一覧を取得
export const getList = async () => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, delay));

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, delay));

  return detailData;
};

// Works一覧を取得
export const getWorkList = async () => {
  const listData = await client.getList<WorksList>({
    endpoint: "works",
    queries: {
      limit: 12
    }
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, delay));

  return listData;
};

// Worksの詳細を取得
export const getWorkDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<WorkDetail>({
    endpoint: "works",
    contentId,
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, delay));

  return detailData;
};