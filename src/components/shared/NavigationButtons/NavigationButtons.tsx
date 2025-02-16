'use client';

import s from './NavigationButtons.module.scss';

import {useRouter} from 'next/navigation';
import {Button} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const pages = [
  '/class',
  '/background',
  '/species',
  '/abilities',
  '/equipment',
  '/next',
];

const NavigationButtons = () => {
  const router = useRouter();
  const currentIndex = pages.indexOf(router.pathname);

  const goToPage = (index: number) => {
    if (index >= 0 && index < pages.length) {
      router.push(pages[index]);
    }
  };

  return (
    <>
      <div className={s.button__container}>
        <Button
          variant="text"
          color="disabled"
          className={s.button}
          onClick={() => goToPage(currentIndex - 1)}
        >
          <ArrowBackIosNewOutlinedIcon color="disabled" />
        </Button>

        <Button
          variant="text"
          color="disabled"
          className={s.button}
          onClick={() => goToPage(currentIndex + 1)}
        >
          <ArrowForwardIosOutlinedIcon color="disabled" />
        </Button>
      </div>
    </>
  );
};

export default NavigationButtons;
