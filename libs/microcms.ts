import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSDate,
} from "microcms-js-sdk";
import { client } from './client'

const delay = 1000;

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

// Works一覧を取得
export const getWorkList = async () => {
  const listData = await client.getList<WorksList>({
    endpoint: "works",
    queries: {
      limit: 20
    }
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, delay));

  return {contents: listData.contents, totalCount: listData.totalCount};
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