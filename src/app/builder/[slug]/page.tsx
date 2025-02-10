'use client';

import {useParams} from 'next/navigation';

const Class = () => {
  const {slug} = useParams();
  return <div>{`Вы открыли страницу: ${slug}`}</div>;
};

export default Class;
