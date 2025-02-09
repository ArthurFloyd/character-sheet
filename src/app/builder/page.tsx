'use client';

import Link from 'next/link';
import {useState} from 'react';
// import {Settings, HelpCircle, FileText} from 'lucide-react';

// import {Settings} from '@mui/icons-material';

import s from './Builder.module.scss';

const tabs = [
  // {id: 'home', label: 'Дом', path: '/'},
  {id: 'class', label: '1. Класс', path: '/class'},
  {id: 'background', label: '2. Предыстория', path: '/background'},
  {id: 'species', label: '3. Вид', path: '/species'},
  {id: 'abilities', label: '4. Способности', path: '/abilities'},
  {id: 'equipment', label: '5. Снаряжение', path: '/equipment'},
  {id: 'next', label: 'Что дальше?', path: '/next'},
];

const Builder = () => {
  const [activeTab, setActiveTab] = useState('class');
  return (
    <header className={s.header}>
      <div className={s.topBar}>
        {/* Логотип и имя персонажа */}
        <div className={s.left}>
          {/* <Settings className={s.icon} /> */}
          <div>
            <h1 className={s.title}>Конструктор персоонажа</h1>
            <p className={s.subtitle}>тут будет имя и аватар</p>
          </div>
          {/* <HelpCircle className={s.helpIcon} /> */}
        </div>

        {/* Иконка меню справа */}
        {/* <FileText className={s.menuIcon} /> */}
      </div>

      {/* Навигация */}
      <nav className={s.navbar}>
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={''}
            className={`${s.navItem} ${activeTab === tab.id ? s.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Builder;
