// import {Typography, Box, Container} from '@mui/material';

import s from './Home.module.scss';

import Greetings from '@/components/pages/home/Greetings';
import Building from '@/components/pages/home/Building';

export default function Home() {
  return (
    <div className={s.home}>
      <div className={s.greetings}>
        <Greetings />
      </div>
      <div className={s.building}>
        <Building />
      </div>
    </div>
  );
}
