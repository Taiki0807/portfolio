import { FaGithub, FaTwitter } from 'react-icons/fa';
import style from './Footer.module.css';
import { Icon } from '@/app/components/parts';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className={style.footer}>
        <div className={`${style.icon}`}>
          <Icon
            color={'white'}
            url={'https://github.com/Taiki0807'}
            name={'github'}
          >
            <FaGithub size={32} />
          </Icon>
          <Icon
            color={'white'}
            url={'https://twitter.com/M4Cx4'}
            name={'twitter'}
          >
            <FaTwitter size={32} />
          </Icon>
        </div>
        <div className={style.row}>
          © 2023 Hosokawa Taiki.
        </div>
      </div>
    </footer>
  );
};
