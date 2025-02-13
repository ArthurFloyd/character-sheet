'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';

import s from './CharacterHeader.module.scss';

import {Button, TextField} from '@mui/material';
import {Add} from '@mui/icons-material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

// const tabs = [
//   {id: 'class', label: 'Класс', path: '/class'},
//   {id: 'background', label: 'Предыстория', path: '/background'},
//   {id: 'species', label: 'Вид', path: '/species'},
//   {id: 'abilities', label: 'Способности', path: '/abilities'},
//   {id: 'equipment', label: 'Снаряжение', path: '/equipment'},
//   {id: 'next', label: 'Что дальше?', path: '/next'},
// ];
const tabs = [
  '/class',
  '/background',
  '/species',
  '/abilities',
  '/equipment',
  '/next',
];

const CharacterHeader = () => {
  const [characterName, setCharacterName] = useState('Character Name');
  const router = useRouter();

  const currentIndex = tabs.findIndex(
    (path) => path === window.location.pathname
  );

  const goToPage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < tabs.length) {
      router.push(tabs[newIndex]);
    }
  };

  return (
    <div className={s.container}>
      <Button
        variant="text"
        color="disabled"
        className={s.button}
        disabled={currentIndex === 0}
        onClick={() => goToPage('prev')}
      >
        <ArrowBackIosNewOutlinedIcon color="disabled" />
      </Button>

      {/* Аватар + Имя */}
      <div className={s.avatar__container}>
        <button className={s.avatar}>
          <Add />
        </button>
        <div>
          <p>Имя персонажа</p>
          <TextField
            variant="outlined"
            size="small"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            className={s.input__name}
          />
          {/* <div style={{fontSize: '12px', color: 'gray', cursor: 'pointer'}}>
            SHOW SUGGESTIONS
          </div> */}
        </div>
      </div>

      <Button
        variant="text"
        color="disabled"
        className={s.button}
        disabled={currentIndex === tabs.length - 1}
        onClick={() => goToPage('next')}
      >
        <ArrowForwardIosOutlinedIcon color="disabled" />
      </Button>
    </div>
  );
};

export default CharacterHeader;
