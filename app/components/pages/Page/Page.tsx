import style from './Page.module.css';
import { useArticles } from './useArticles';
import { AboutCard } from './index';
import { ArticleCard } from '@/app/components/features';
import { Title } from '@/app/components/parts';

export const Page = async () => {
  const { Data }: any = await useArticles();
  if (!Data) return <div>loading...</div>;
  return (
    <div>
      <AboutCard />
      <Title title={'LATEST ARTICLES'} />
      <div className={style.articles__item}>
        {Data.map((data: any, index: number) => {
          return (
            <ArticleCard
              key={`${index}`}
              title={data.title}
              url={`/article/${data.id}`}
              image={
                data.thumbnail ||
                'https://placehold.jp/320x185.png?text=No Image'
              }
            />
          );
        })}
      </div>
    </div>
  );
};
