import Link from 'next/link';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.container}>
        {/* <div className={s.nav}> */}
        <Link className={s.logo} href="/">
          HeroMaker
        </Link>
        <ol className={s.nav_link}>
          <li>
            <Link href="/builder">Создать персонажа</Link>
          </li>
          <li>
            <Link href="/profile">Личный кабинет</Link>
          </li>
        </ol>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Header;
