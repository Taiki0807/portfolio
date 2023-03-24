import { FaTag } from 'react-icons/fa';
import style from './ArticleDetail.module.css';

interface Tag {
  id: number;
  name: string;
}
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
  updated_at: string;
  tag: Tag[];
}

interface Props {
  data: Data;
}
const formatDate = (dateStr: string) => {
  const dateObj = new Date(dateStr);
  const formattedDate = `${dateObj.getFullYear()}年${
    dateObj.getMonth() + 1
  }月${dateObj.getDate()}日`;
  return formattedDate;
};

export const ArticleDetail = ({
  data,
}: Props): JSX.Element => {
  const createdDate = formatDate(data.created_at);
  const updateDate = formatDate(data.updated_at);

  return (
    <div className={style.article__wrapper}>
      <h1 className={style.title}>{data.title}</h1>
      <div className={style.categorytag}>
        {data.tag.map((tag: any) => (
          <div key={tag.id} className={style.tag__item}>
            <FaTag />
            {tag.name}
          </div>
        ))}
      </div>
      <div className={style.day__item}>
        <p>投稿日:{createdDate}</p>
        <p>更新日:{updateDate}</p>
      </div>
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
              __html: data.toc_text
                ? data.toc_text
                : 'none',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
