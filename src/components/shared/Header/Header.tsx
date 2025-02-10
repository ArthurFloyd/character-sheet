import Link from 'next/link';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.container}>
        <Link className={s.logo} href="/">
          HeroMaker
        </Link>
        <ol className={s.nav_link}>
          <li>
            <Link href="/builder/class">Создать персонажа</Link>
          </li>
          <li>
            <Link href="/profile">Личный кабинет</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
