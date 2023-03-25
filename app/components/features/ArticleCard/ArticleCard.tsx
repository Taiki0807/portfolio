import Image from 'next/image';
import style from './ArticleCard.module.css';

interface Tag {
  id: number;
  name: string;
}
interface Props {
  title: string;
  url: string;
  image: string;
  tag: Tag[];
  category: {
    id: number;
    name: string;
    color: string;
  };
}

export const ArticleCard = (props: Props): JSX.Element => {
  return (
    <div id="articles" className={style.changeCard}>
      <div className={style.changeItem}>
        <a href={props.url}>
          {props.category.name === 'none' ? (
            ''
          ) : (
            <p className={style.itemCat}>
              {props.category.name}
            </p>
          )}
          <Image
            className={style.img}
            src={props.image}
            alt="image"
            fill
            priority
          />
          <div className={style.changeItemTxt}>
            <p className={style.itemTitle}>{props.title}</p>
            <ul className={style.itemTag}>
              {props.tag.map((data: any) => {
                return <li key={data.id}>{data.name}</li>;
              })}
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};
