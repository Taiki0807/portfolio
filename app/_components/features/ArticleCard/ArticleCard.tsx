import Image from 'next/image';
import Link from 'next/link';
import { Twemoji } from 'react-emoji-render';
import style from './ArticleCard.module.css';

interface Tag {
  id: number;
  name: string;
}
interface Props {
  title: string;
  url: string;
  image?: string;
  tag: Tag[];
  category: {
    id: number;
    name: string;
    color: string;
  };
  emoji?: string;
}

export const ArticleCard = (props: Props): JSX.Element => {
  return (
    <div className={style.changeItem}>
      <Link href={props.url}>
        {props.category.name === 'none' ? (
          ''
        ) : (
          <p className={style.itemCat}>
            {props.category.name}
          </p>
        )}
        <div className={style.image__container}>
          {props.image ? (
            <Image
              className={style.img}
              src={props.image}
              alt="image"
              fill
              priority
            />
          ) : (
            <Twemoji
              className={style.postCardEmoji}
              svg
              text={'📝'}
            />
          )}
        </div>
        <div className={style.changeItemTxt}>
          <p className={style.itemTitle}>{props.title}</p>
          <ul className={style.itemTag}>
            {props.tag.map((data: any) => {
              return <li key={data.id}>{data.name}</li>;
            })}
          </ul>
        </div>
      </Link>
    </div>
  );
};
