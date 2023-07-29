import Image from 'next/image';
import Link from 'next/link';
import { Twemoji } from 'react-emoji-render';
import style from './WorksCard.module.css';

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
  category: string;
}

export const WorksCard = (props: Props): JSX.Element => {
  return (
    <div className={style.worksCard}>
      <Link href={props.link}>
        <div className={style.image__container}>
          {props.imageUrl ? (
            <Image
              src={props.imageUrl}
              alt="Picture of the author"
              fill
              className={style.image}
            />
          ) : (
            <Twemoji
              className={style.postCardEmoji}
              svg
              text={'📝'}
            />
          )}
        </div>
        <div className={style.card__item}>
          <h3>
            {props.title}
            <span className={style.tag}>
              {props.category}
            </span>
          </h3>
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  );
};
