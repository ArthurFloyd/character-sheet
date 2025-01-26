import {Typography, Box, Container} from '@mui/material';

import s from './Home.module.scss';

import Building from '@/components/pages/home/Building';

export default function Home() {
  return (
    <div className={s.home}>
      <Container className={s.home__text}>
        <Box>
          <Typography variant="h3" component="h1">
            HeroMaker
          </Typography>
          <Typography className={s.text}>
            Добро пожаловать в HeroMaker — инструмент создания уникальных
            персонажей для игр Dungeons & Dragons. Настройте своего героя до
            мельчайших деталей, выбирая расы, классы и предысторию. Выгружайте
            готовый лист персонажа в PDF или играйте онлайн с интерактивным
            листом!
          </Typography>
          <Typography className={s.text}>
            Создавай. Играй. Вдохновляйся!
          </Typography>
        </Box>
      </Container>
      {/* <Building /> */}
    </div>
  );
}
