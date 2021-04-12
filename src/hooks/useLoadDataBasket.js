import { useState, useEffect } from 'react';

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
  /*   let deleteTest = 0
    dataAsteroids && Object.keys(dataAsteroids.near_earth_objects).map((key) => {
      dataAsteroids.near_earth_objects[key].map((item) => {
        const newItem = Object.assign({}, item);
          arrayBasket.forEach(element => {
            if (item === element) {
              deleteTest=item.id;
          }
        });
      })
    })  */
  };

  return [
    destroyedAsteroid,
    arrayBasket,
    addAsteroidInBasket,
    destroyAsteroid,
  ];
};

export default useLoadBasket;