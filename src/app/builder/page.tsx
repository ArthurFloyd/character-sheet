'use client';

import Link from 'next/link';

import {usePathname} from 'next/navigation';

import s from './Builder.module.scss';

const tabs = [
  {id: 'class', label: 'Класс', path: '/class'},
  {id: 'background', label: 'Предыстория', path: '/background'},
  {id: 'species', label: 'Вид', path: '/species'},
  {id: 'abilities', label: 'Способности', path: '/abilities'},
  {id: 'equipment', label: 'Снаряжение', path: '/equipment'},
  {id: 'next', label: 'Что дальше?', path: '/next'},
];

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
          {tabs.map((tab) => (
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
