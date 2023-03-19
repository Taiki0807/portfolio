import { FaTag } from 'react-icons/fa';
import style from './Article.module.css';
import { useArticle } from './useArticle';

interface Props {
  id: string;
}

export const Article = async (props: Props) => {
  const { Data }: any = await useArticle(props.id);
  if (!Data) return <div>loading...</div>;
  const dateStr = Data.created_at;
  const dateObj = new Date(dateStr);
  const formattedDate = `${dateObj.getFullYear()}年${
    dateObj.getMonth() + 1
  }月${dateObj.getDate()}日`;

  return (
    <div className={style.article__wrapper}>
      <h1 className={style.title}>{Data.title}</h1>
      <div className={style.categorytag}>
        <FaTag />
        {Data.category.name}
      </div>
      <p className={style.created_at}>
        投稿日:{formattedDate}
      </p>
      <div className={style.article__item}>
        <div
          className={style.main}
          dangerouslySetInnerHTML={{
            __html: Data.main_text,
          }}
        />
        <div className={style.side}>
          <p>目次</p>
          <div
            className={style.toc}
            dangerouslySetInnerHTML={{
              __html: Data.toc_text,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
