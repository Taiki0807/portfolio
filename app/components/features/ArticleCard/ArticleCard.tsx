import Image from 'next/image';
import style from './ArticleCard.module.css';

interface Props {
  title: string;
  url: string;
  image: string;
}

export const ArticleCard = (props: Props): JSX.Element => {
  return (
    <div id="articles" className={style.changeCard}>
      <div className={style.changeItem}>
        <a href={props.url}>
          <p className={style.itemCat}>{props.title}</p>
          <Image
            className={style.img}
            src={props.image}
            alt="image"
            fill
          />
          <div className={style.changeItemTxt}>
            <p className={style.itemTitle}>{props.title}</p>
            <ul className={style.itemTag}>
              <li>Next.js</li>
              <li>Next.js</li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};
