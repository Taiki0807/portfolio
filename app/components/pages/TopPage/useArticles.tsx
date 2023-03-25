import { getFetcher } from '@/utils/httpClient';

type Tag = {
  id: number;
  name: string;
};
type Articles = {
  id: number;
  category: {
    id: number;
    name: string;
    color: string;
  };
  tag: Tag[];
  title: string;
  thumbnail: string | null;
  lead_text: string;
};

export const useArticles = async () => {
  const url = `/api/blog/posts/`;
  const data: Articles[] = await getFetcher(
    url,
    'no-store'
  );
  return {
    Data: data,
  };
};
