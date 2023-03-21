import { getFetcher } from '@/utils/httpClient';

type Articles = {
  id: number;
  category: {
    id: number;
    name: string;
    color: string;
  };
  title: string;
  thumbnail: string | null;
  lead_text: string;
};

export const useArticles = async () => {
  const url = `/api/blog/posts/`;
  const data: Articles[] = await getFetcher(url);
  return {
    Data: data,
  };
};
