import {ReactNode} from 'react';
import Builder from './page';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <div>
      <Builder />
      <main>{children}</main>
    </div>
  );
}
