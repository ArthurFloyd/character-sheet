'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import s from './Builder.module.scss';

import {navigationTabs} from '@/constants/constants';

const Builder = () => {
  const pathname = usePathname();

  return (
    <div>
      <header className={s.header}>
        <div className={s.topBar}>
          <h1 className={s.title}>Конструктор персонажа</h1>
          <p className={s.subtitle}>тут будет имя и аватар</p>
        </div>

        <nav className={s.navbar}>
          {navigationTabs.map((tab) => (
            <Link
              key={tab.id}
              href={`/builder${tab.path}`}
              className={`${s.navItem} ${
                pathname.includes(tab.id) ? s.active : ''
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Builder;
