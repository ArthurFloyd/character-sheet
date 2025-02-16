'use client';

import Link from 'next/link';
// import {useState} from 'react';
import {usePathname} from 'next/navigation';

// import {Settings} from '@mui/icons-material';

import s from './Builder.module.scss';
import {Button} from '@mui/material';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const tabs = [
  // {id: 'home', label: 'Дом', path: '/'},
  {id: 'class', label: 'Класс', path: '/class'},
  {id: 'background', label: 'Предыстория', path: '/background'},
  {id: 'species', label: 'Вид', path: '/species'},
  {id: 'abilities', label: 'Способности', path: '/abilities'},
  {id: 'equipment', label: 'Снаряжение', path: '/equipment'},
  {id: 'next', label: 'Что дальше?', path: '/next'},
];

const Builder = () => {
  // const [activeTab, setActiveTab] = useState('class');
  // const router = useRouter();

  // const goToPage = (slug: string) => {
  //   router.push(`/builder/${slug}`);
  // };
  const pathname = usePathname();

  return (
    <div>
      <header className={s.header}>
        <div className={s.topBar}>
          {/* Логотип и имя персонажа */}
          {/* <div className={s.left}> */}
          {/* <Settings className={s.icon} /> */}
          {/* <div> */}
          <h1 className={s.title}>Конструктор персонажа</h1>
          <p className={s.subtitle}>тут будет имя и аватар</p>
          {/* </div> */}
          {/* <HelpCircle className={s.helpIcon} /> */}
          {/* </div> */}

          {/* Иконка меню справа */}
          {/* <FileText className={s.menuIcon} /> */}
        </div>

        {/* Навигация */}
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
