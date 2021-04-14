import { useState } from 'react';

const useLoadBasket = (
  dataAsteroids, 
  setDataAsteroid
) => {
  const [arrayBasket, setArrayBasket] = useState([]);
  const [indexArrayBasket, setIndexArrayBasket] = useState([]);
  const [keyNasaBasket, setKeyNasaBasket] = useState([]);

  const addAsteroidInBasket = (item, index, keyNasa) => {
    if (!arrayBasket.includes(item)) {
      setArrayBasket([...arrayBasket, item]);
      setIndexArrayBasket([...indexArrayBasket, index]);
      setKeyNasaBasket([...keyNasaBasket, keyNasa]);
    }
  };

  const destroyAsteroid = () => {
    Object.keys(dataAsteroids.near_earth_objects).forEach(function(keyNasa) {
      if (keyNasaBasket.includes(keyNasa)) {
        dataAsteroids.near_earth_objects[keyNasa].forEach(function(item, index) {
          if (indexArrayBasket.includes(index)) {
            delete dataAsteroids.near_earth_objects[keyNasa][index];
          }
        })
      }
    })

    setArrayBasket([]);
  };

  return [
    arrayBasket,
    addAsteroidInBasket,
    destroyAsteroid,
  ];
};

export default useLoadBasket;
