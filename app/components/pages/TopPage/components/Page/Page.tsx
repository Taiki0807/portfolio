import { AboutCard } from '../index';
import style from './Page.module.css';
import { ArticleCard } from '@/app/components/features';
import { Title } from '@/app/components/parts';

interface Category {
  id: number;
  name: string;
  color: string;
}

interface Data {
  id: number;
  category: Category;
  title: string;
  thumbnail: string | null;
  lead_text: string;
}

interface Props {
  data: Data[];
}

export const Page = ({ data }: Props): JSX.Element => {
  return (
    <div>
      <AboutCard />
      <Title title={'LATEST ARTICLES'} />
      <div className={style.articles__item}>
        {data.map((data: any, index: number) => {
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
