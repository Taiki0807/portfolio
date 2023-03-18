import { AboutCard } from './index';
import { ArticleCard } from '@/app/components/features';
import { Title } from '@/app/components/parts';

export const Page = (): JSX.Element => {
  return (
    <div>
      <AboutCard />
      <Title title={'LATEST ARTICLES'} />
      <ArticleCard
        title={'test'}
        url={'/'}
        image={
          'https://placehold.jp/320x185.png?text=サンプル'
        }
      />
    </div>
  );
};
