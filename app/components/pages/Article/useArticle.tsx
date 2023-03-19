import { getFetcher } from '@/utils/httpClient';

type Article = {
  id: number;
  category: {
    id: number;
    name: string;
    color: string;
  };
  main_text: string;
  toc_text: string;
  title: string;
  thumbnail: string | null;
  lead_text: string;
  created_at: string;
};

export const useArticle = async (id: string) => {
  const url = `/api/blog/posts/${id}`;
  const data: Article = await getFetcher(url);
  return {
    Data: data,
  };
};
