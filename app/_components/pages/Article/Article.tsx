import { ArticleDetail } from './components';
import { useArticle } from './useArticle';

interface Props {
  id: string;
}

export const Article = async (props: Props) => {
  const { Data }: any = await useArticle(props.id);
  return (
    <div>
      <ArticleDetail data={Data} />
    </div>
  );
};
