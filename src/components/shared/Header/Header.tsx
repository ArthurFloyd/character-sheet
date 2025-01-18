import Link from 'next/link';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div>
        <Link className={s.logo} href="/">
          Character Sheet
        </Link>
        <nav></nav>
      </div>
    </header>
  );
};

export default Header;
