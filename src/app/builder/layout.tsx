import {ReactNode} from 'react';

import Builder from './page';
import CharacterHeader from '@/components/shared/CharacterHeader/CharacterHeader';
import NavigationButtons from '@/components/shared/NavigationButtons/NavigationButtons';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <div>
      <Builder />
      <CharacterHeader />
      <NavigationButtons />
      <main>{children}</main>
    </div>
  );
}
