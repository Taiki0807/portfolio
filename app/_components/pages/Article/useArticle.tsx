import { load } from 'cheerio';
import hljs from 'highlight.js';
import { getFetcher } from '@/utils/httpClient';
import 'highlight.js/styles/atom-one-dark.css';

type Tag = {
  id: number;
  name: string;
};
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
  updated_at: string;
  tag: Tag[];
};

export const useArticle = async (id: string) => {
  const url = `/api/blog/posts/${id}`;
  const data: Article = await getFetcher(url, 'no-store');
  const $ = load(data.main_text);

  $('code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  data.main_text = $.html();
  return {
    Data: data,
  };
};
