import { Works } from '../../../type';
import { AboutCard } from '../index';
import style from './Page.module.css';
import { ArticleCard } from '@/app/_components/features';
import { WorksCard } from '@/app/_components/features/Card';
import { Title } from '@/app/_components/parts';

interface Category {
  id: number;
  name: string;
  color: string;
}
interface Tag {
  id: number;
  name: string;
}

interface Data {
  id: number;
  category: Category;
  title: string;
  thumbnail: string | null;
  lead_text: string;
  tag: Tag[];
}

interface Props {
  data: Data[];
  works: Works[];
}

export const Page = ({
  data,
  works,
}: Props): JSX.Element => {
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
              tag={data.tag}
              category={data.category}
            />
          );
        })}
      </div>
      <Title title="Works" />
      <div className={style.works}>
        {works.map((data: any, index: number) => {
          return (
            <WorksCard
              key={`${index}`}
              title={data.title}
              description={data.description}
              imageUrl={
                data.thumbnail ||
                'https://placehold.jp/320x185.png?text=No Image'
              }
              link={`/works/${data.id}`}
              category={data.category.name}
            />
          );
        })}
      </div>
    </div>
  );
};
