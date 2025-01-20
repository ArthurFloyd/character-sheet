import Image from 'next/image';
import Link from 'next/link';

import {CardActionArea, Typography, CardContent, Card} from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import s from './Building.module.scss';

import charactersImag1 from '@/public/images/charactersParty1.jpeg';
import charactersImag2 from '@/public/images/charactersParty2.jpeg';
import charactersImag3 from '@/public/images/charactersParty3.jpeg';
import charactersImag4 from '@/public/images/charactersParty4.jpeg';

const Building = () => {
  const buildingImages = [
    charactersImag1,
    charactersImag2,
    charactersImag3,
    charactersImag4,
  ];
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log('s', buildingImages[getRandomArbitrary(1, 5)]);
  console.log('ss', Math.floor(getRandomArbitrary(0, 4)));
  return (
    <div className={s.c}>
      <Link className={s.container} href="/characters/builder">
        <Card sx={{maxWidth: 445}} className={s.card}>
          <CardActionArea className={s.image}>
            <Image
              aria-hidden
              src={buildingImages[Math.floor(getRandomArbitrary(0, 4))]}
              alt="create characters"
              // width="100%"
              // height="100%"
            />
            <CardContent className={s.content}>
              <Typography gutterBottom variant="h5" component="div">
                Классика
              </Typography>
              <Typography variant="body2">
                Создай персоонажа используя пошаговый подход
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <CardActionArea className={s.brg__button}>
          <div className={s.button}>
            <Typography className={s.text}>Создать</Typography>
            <ArrowForwardIosOutlinedIcon className={s.arrow} />
          </div>
        </CardActionArea>
      </Link>
    </div>
  );
};

export default Building;
