import {Typography, Box, Container} from '@mui/material';

import s from './Greetings.module.scss';

const Greetings = () => {
  return (
    <Container className={s.greetings__text}>
      <Box>
        <Typography className={s.main__text} variant="h3" component="h1">
          HeroMaker
        </Typography>
        <Typography className={s.text}>
          Добро пожаловать в HeroMaker — инструмент создания уникальных
          персонажей для игр Dungeons & Dragons <br />
          Настройте своего героя до мельчайших деталей, выбирая расы, классы и
          предысторию <br />
          Выгружайте готовый лист персонажа в PDF или играйте онлайн с
          интерактивным листом
        </Typography>
        <Typography className={s.text}>
          Создавай! Играй! Вдохновляйся!
        </Typography>
      </Box>
    </Container>
  );
};

export default Greetings;
