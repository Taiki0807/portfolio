'use client';
import { useState } from 'react';
import { FaGithub, FaBars } from 'react-icons/fa';
import style from './Header.module.css';
import { Icon } from '@/app/components/parts';

export const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);
  const MenuHandle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <nav className={style.nav}>
          <div
            className={style.checkbtn}
            onClick={MenuHandle}
          >
            <FaBars color="white" />
          </div>
          <a href="/" className={style.logo}>
            Hosokawa-lab
          </a>
          <ul
            className={`${style.nav__wrapper} ${
              openMenu ? undefined : style.nav__hidden
            }`}
          >
            <li className={style.nav__item}>
              <a href="/">Home</a>
            </li>
            <li className={style.nav__item}>
              <a href="/#about">About</a>
            </li>
            <li className={style.nav__item}>
              <a href="/#articles">Articles</a>
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
