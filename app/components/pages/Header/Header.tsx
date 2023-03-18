import { FaGithub } from 'react-icons/fa';
import { Icon } from '../../parts';
import style from './Header.module.css';

export const Header = (): JSX.Element => {
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <nav className={style.nav}>
          <a href="/" className={style.logo}>
            Hosokawa-lab
          </a>
          <ul className={style.nav__wrapper}>
            <li className={style.nav__item}>
              <a href="/">Home</a>
            </li>
            <li className={style.nav__item}>
              <a href="#about">About</a>
            </li>
            <li className={style.nav__item}>
              <a href="#articles">Articles</a>
            </li>
            <li>
              <Icon
                color={'white'}
                url={'https://github.com/Taiki0807'}
                name={'github'}
              >
                <FaGithub size={32} />
              </Icon>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
