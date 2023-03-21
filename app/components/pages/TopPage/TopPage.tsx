import { Page } from './components';
import { useArticles } from './useArticles';

export const TopPage = async () => {
  const { Data } = await useArticles();
  if (!Data) return <div>loading...</div>;
  return (
    <div>
      <Page data={Data} />
    </div>
  );
};
