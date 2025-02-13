import {ReactNode} from 'react';

import Builder from './page';
import CharacterHeader from '@/components/shared/Character Header/CharacterHeader';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <div>
      <Builder />
      <CharacterHeader />
      <main>{children}</main>
    </div>
  );
}
