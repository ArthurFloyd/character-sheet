// 'use client';

import Link from 'next/link';
import Image from 'next/image';
import {StaticImageData} from 'next/image';

import s from './Card.module.scss';

import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

interface CardProps {
  image?: string | StaticImageData;
  title: string;
  description: string;
  textButton: string;
  alt: string;
  pathRouter: string;
}

const Card = ({
  image,
  title,
  description,
  textButton,
  alt,
  pathRouter,
}: CardProps) => {
  return (
    <div className={s.container}>
      <Link href={pathRouter} legacyBehavior>
        <a className={s.content}>
          <MuiCard className={s.card}>
            <CardActionArea className={s.image}>
              {image ? <Image aria-hidden src={image} alt={alt} /> : null}

              <CardContent className={s.content}>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" className={s.description}>
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </MuiCard>
          <CardActionArea className={s.brg__button}>
            <div className={s.button}>
              <Typography className={s.text}>{textButton}</Typography>
              <ArrowForwardIosOutlinedIcon className={s.arrow} />
            </div>
          </CardActionArea>
        </a>
      </Link>
    </div>
  );
};

export default Card;
