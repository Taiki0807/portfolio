import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import style from './AboutCard.module.css';
import { Icon } from '@/app/components/parts';

export const AboutCard = (): JSX.Element => {
  return (
    <div>
      <div id="about" className={style.About__wrapper}>
        <div>
          <Image
            className={style.img}
            src="/icon.jpg"
            alt="icon"
            width={200}
            height={200}
            priority={true}
          />
        </div>
        <div className={style.About__item}>
          <p className={style.text1}>Hosokawa Taiki</p>
          <p className={style.text2}>
            Student / Web Developer
          </p>
        </div>
        <div className={style.media}>
          <Icon
            color={'black'}
            url={'https://github.com/Taiki0807'}
            name={'github'}
          >
            <FaGithub size={32} />
          </Icon>
          <Icon
            color={'cyan'}
            url={'https://twitter.com/M4Cx4'}
            name={'twitter'}
          >
            <FaTwitter size={32} />
          </Icon>
        </div>
      </div>
    </div>
  );
};
