import { useState } from 'react';

const useLoadBasket = (
  dataAsteroids, 
  setDataAsteroid
) => {
  const [arrayBasket, setArrayBasket] = useState([]);
  const [destroyedAsteroid, setDestroyedAsteroid] = useState([]);

  const addAsteroidInBasket = (item) => {
    arrayBasket.includes(item) || setArrayBasket([...arrayBasket, item]);
  };

  const destroyAsteroid = () => {
    
  };

  return [
    destroyedAsteroid,
    arrayBasket,
    addAsteroidInBasket,
    destroyAsteroid,
  ];
};

export default useLoadBasket;