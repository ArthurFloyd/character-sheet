'use client';

import s from './NavigationButtons.module.scss';

import {usePathname, useRouter} from 'next/navigation';
import {Button} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import {navigationTabs} from '@/constants/constants';

const NavigationButtons = () => {
  const router = useRouter();
  const pathname = usePathname();

  const basePath = '/builder';
  const currentPath = pathname.replace(basePath, '');
  const currentIndex = navigationTabs.findIndex(
    (tab) => tab.path === currentPath
  );

  const goToPage = (index: number) => {
    if (index >= 0 && index < navigationTabs.length) {
      router.push(`${basePath}${navigationTabs[index].path}`);
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
          <ArrowBackIosNewOutlinedIcon color="disabled" className={s.arrow} />
        </Button>

        <Button
          variant="text"
          color="disabled"
          className={s.button}
          onClick={() => goToPage(currentIndex + 1)}
        >
          <ArrowForwardIosOutlinedIcon color="disabled" className={s.arrow} />
        </Button>
      </div>
    </>
  );
};

export default NavigationButtons;
