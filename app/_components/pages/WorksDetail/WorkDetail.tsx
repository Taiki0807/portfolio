import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Icon } from '../../parts';
import { Work } from '../type';
import style from './WorkDetail.module.css';

interface Props {
  data: Work;
}
const WorkDetail = ({ data }: Props) => {
  return (
    <div>
      <div className={style.work__top}>
        <div className={style.image__container}>
          <Image src={data.thumbnail} alt="" fill />
          <div className={style.social__buttons}>
            <Icon
              color={'black'}
              url={data.githubLink}
              name={'github'}
            >
              <FaGithub size={32} />
            </Icon>
            <Icon
              color={'cyan'}
              url={data.siteLink}
              name={'link'}
            >
              <FaLink size={32} />
            </Icon>
          </div>
        </div>
        <div className={style.right__item}>
          <div className={style.title__item}>
            <h1>{data.title}</h1>
            <Link
              href={data.siteLink}
              className={style.link__item}
            >
              <BiLinkExternal />
              <p>アクセス</p>
            </Link>
          </div>
          <p>{data.description}</p>
        </div>
      </div>
      <div className={style.main__container}>
        <div
          className={style.main}
          dangerouslySetInnerHTML={{
            __html: data.main_text,
          }}
        />
        <div className={style.side}>
          <h3>目次</h3>
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

export default WorkDetail;
