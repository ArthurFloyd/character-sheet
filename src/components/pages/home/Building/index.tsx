'use client';

import s from './Building.module.scss';

import Card from '@/components/shared/Card/Card';

import charactersParty1 from '@/public/images/charactersParty1.jpeg';
import charactersParty2 from '@/public/images/charactersParty2.jpeg';

const Building = () => {
  return (
    <div className={s.container}>
      <h1>Mетод создания персоонажа</h1>
      <p>Выбирите как вы хотите создать своего персоонажа</p>
      <div className={s.card}>
        <div>
          <Card
            image={charactersParty1}
            title={'Классика'}
            description={'Создай персоонажа используя пошаговый подход'}
            textButton={'Создать'}
            alt={'Клфссическое создание персоонажа'}
            pathRouter={'/builder/class'}
          />
        </div>
        <div>
          <Card
            image={charactersParty2}
            title={'Готовый'}
            description={
              'Просмотрите подборку предварительно созданных персонажей'
            }
            textButton={'Начать просмотр'}
            alt={'Клфссическое создание персоонажа'}
            pathRouter={'/builder/class'}
          />
        </div>
        <div>
          <Card
            title={'Быстрое создание'}
            description={
              'Выберите вид и класс, чтобы быстро создать персонажа 1-го уровня'
            }
            textButton={'Создать'}
            alt={'Клфссическое создание персоонажа'}
            pathRouter={'/builder/class'}
          />
        </div>
        <div>
          <Card
            title={'Случайный'}
            description={
              'Вы можете опционально задать некоторые параметры, такие как уровень, вид и класс.'
            }
            textButton={'Создать'}
            alt={'Клфссическое создание персоонажа'}
            pathRouter={'/builder/class'}
          />
        </div>
      </div>
    </div>
  );
};

export default Building;
