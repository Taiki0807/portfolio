'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import style from './Header.module.css';
import { Icon } from '@/app/_components/parts';

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
            {openMenu ? (
              <FaTimes />
            ) : (
              <FaBars color="black" />
            )}
          </div>
          <Link href="/" className={style.logo}>
            Hosokawa-lab
          </Link>
          <ul
            className={`${style.nav__wrapper} ${
              openMenu ? undefined : style.nav__hidden
            }`}
          >
            <li className={style.nav__item}>
              <Link href="/">Home</Link>
            </li>
            <li className={style.nav__item}>
              <Link href="/#about">About</Link>
            </li>
            <li className={style.nav__item}>
              <Link href="/#articles">Articles</Link>
            </li>
            <li className={style.nav__item}>
              <Link href="/#works">Works</Link>
            </li>
            <li>
              <Icon
                color={'black'}
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
