import { FaTag } from 'react-icons/fa';
import style from './ArticleDetail.module.css';

interface Data {
  id: number;
  category: {
    id: number;
    name: string;
    color: string;
  };
  main_text: string;
  toc_text: string;
  title: string;
  thumbnail: string | null;
  lead_text: string;
  created_at: string;
}

interface Props {
  data: Data;
}

export const ArticleDetail = ({
  data,
}: Props): JSX.Element => {
  const dateStr = data.created_at;
  const dateObj = new Date(dateStr);
  const formattedDate = `${dateObj.getFullYear()}年${
    dateObj.getMonth() + 1
  }月${dateObj.getDate()}日`;

  return (
    <div className={style.article__wrapper}>
      <h1 className={style.title}>{data.title}</h1>
      <div className={style.categorytag}>
        <FaTag />
        {data.category.name}
      </div>
      <p className={style.created_at}>
        投稿日:{formattedDate}
      </p>
      <div className={style.article__item}>
        <div
          className={style.main}
          dangerouslySetInnerHTML={{
            __html: data.main_text,
          }}
        />
        <div className={style.side}>
          <p>目次</p>
          <div
            className={style.toc}
            dangerouslySetInnerHTML={{
              __html: data.toc_text,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
