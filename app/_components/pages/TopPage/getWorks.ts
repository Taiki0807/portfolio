import { Works } from '../type';
import { getFetcher } from '@/utils/httpClient';

export const getWorks = async () => {
  const url = `/api/works/works/`;
  const data: Works[] = await getFetcher(url, 'no-store');
  return {
    data: data,
  };
};
