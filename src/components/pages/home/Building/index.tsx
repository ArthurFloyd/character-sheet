// 'use client';

import s from './Building.module.scss';

// import {getRandomArbitrary} from '@/constants/function';
import Card from '@/components/shared/Card/Card';

import charactersParty1 from '@/public/images/charactersParty1.jpeg';
// import charactersParty2 from '@/public/images/charactersParty2.jpeg';
// import charactersParty3 from '@/public/images/charactersParty3.jpeg';
// import charactersParty4 from '@/public/images/charactersParty4.jpeg';

// import {buildingImages} from '@/constants/constants';
// const buildingImages = [
//   charactersParty1,
//   charactersParty2,
//   charactersParty3,
//   charactersParty4,
// ];

const Building = () => {
  // const cardImage = buildingImages[Math.floor(getRandomArbitrary(0, 4))];
  return (
    <div>
      <div>
        <div className={s.text}>
          <h1>Mетод создания персоонажа</h1>
          <p>Выбирите как вы хотите создать своего персоонажа</p>
        </div>
        <div className={s.container}>
          <div>
            <Card
              image={charactersParty1}
              title={'Классика'}
              description={'Создай персоонажа используя пошаговый подход'}
              textButton={'Создать'}
              alt={'Клфссическое создание персоонажа'}
              pathRouter={'/builder'}
            />
          </div>
          <div>
            <Card
              image={charactersParty1}
              title={'Классика'}
              description={'Создай персоонажа используя пошаговый подход'}
              textButton={'Создать'}
              alt={'Клфссическое создание персоонажа'}
              pathRouter={'/builder'}
            />
          </div>
          <div>
            <Card
              image={charactersParty1}
              title={'Классика'}
              description={'Создай персоонажа используя пошаговый подход'}
              textButton={'Создать'}
              alt={'Клфссическое создание персоонажа'}
              pathRouter={'/builder'}
            />
          </div>
          <div>
            <Card
              image={charactersParty1}
              title={'Классика'}
              description={'Создай персоонажа используя пошаговый подход'}
              textButton={'Создать'}
              alt={'Клфссическое создание персоонажа'}
              pathRouter={'/builder'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
