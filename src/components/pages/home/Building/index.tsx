import Image from 'next/image';
import Link from 'next/link';

import s from './Building.module.scss';

import charactersImag from '@/public/images/charactersParty.jpeg';

const Builing = () => {
  return (
    <Link
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="/characters/builder"
    >
      <div>
        <div className={s.image}>
          <Image
            aria-hidden
            src={charactersImag}
            alt="create characters"
            width={300}
            height={300}
          />
        </div>
        <span className={s.text}>Start Building</span>
      </div>
    </Link>
  );
};

export default Builing;
