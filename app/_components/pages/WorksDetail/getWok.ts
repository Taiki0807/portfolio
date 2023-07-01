import { load } from 'cheerio';
import hljs from 'highlight.js';
import { Work } from '../type';
import { getFetcher } from '@/utils/httpClient';
import 'highlight.js/styles/atom-one-dark.css';

export const getWork = async (id: string) => {
  const url = `/api/works/works/${id}`;
  const data: Work = await getFetcher(url, 'no-store');
  const $ = load(data.main_text);

  $('code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  data.main_text = $.html();
  return {
    workData: data,
  };
};
