'use client';

import s from './NavigationButtons.module.scss';

import {usePathname, useRouter} from 'next/navigation';
import {Button} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const tabs = [
  {id: 'class', label: 'Класс', path: '/class'},
  {id: 'background', label: 'Предыстория', path: '/background'},
  {id: 'species', label: 'Вид', path: '/species'},
  {id: 'abilities', label: 'Способности', path: '/abilities'},
  {id: 'equipment', label: 'Снаряжение', path: '/equipment'},
  {id: 'next', label: 'Что дальше?', path: '/next'},
];

const NavigationButtons = () => {
  const router = useRouter();
  const pathname = usePathname();

  const basePath = '/builder';
  const currentPath = pathname.replace(basePath, '');
  const currentIndex = tabs.findIndex((tab) => tab.path === currentPath);

  const goToPage = (index: number) => {
    if (index >= 0 && index < tabs.length) {
      router.push(`${basePath}${tabs[index].path}`);
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
