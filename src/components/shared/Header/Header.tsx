import Link from 'next/link';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <Link className={s.logo} href="/">
          HeroMaker
        </Link>
        <nav></nav>
      </div>
    </header>
  );
};

export default Header;
