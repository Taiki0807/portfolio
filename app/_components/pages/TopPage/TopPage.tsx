import { Page } from './components';
import { getWorks } from './getWorks';
import { useArticles } from './useArticles';

export const TopPage = async () => {
  const { Data } = await useArticles();
  const { data } = await getWorks();
  return (
    <div>
      <Page data={Data} works={data} />
    </div>
  );
};
