'use client';

import {useState} from 'react';

import s from './CharacterHeader.module.scss';

import {TextField} from '@mui/material';
import {Add} from '@mui/icons-material';

import AvatarPopup from '../AvatarPopup/AvatarPopup';

const CharacterHeader = () => {
  const [characterName, setCharacterName] = useState('Character Name');

  return (
    <div className={s.container}>
      <div className={s.avatar__container}>
        <button className={s.avatar} onClick={() => console.log('open popup')}>
          <Add />
        </button>
        <div className={s.input}>
          <p>Имя персонажа</p>
          <TextField
            variant="outlined"
            size="small"
            color="disabled"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            className={s.input__name}
          />
        </div>
      </div>
      <AvatarPopup />
    </div>
  );
};

export default CharacterHeader;
