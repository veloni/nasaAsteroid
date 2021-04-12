import { useState, useEffect } from 'react';

import axios from 'axios';

const useOpenComponent = () => {
  const [isOpenAboutAsteroid, setIsOpenAboutAsteroid] = useState(false);
  const [isBasket, setIsBasket] = useState(false);
  const [isAsteroids, setIsAsteroid] = useState(true);

  const [itemWhoOpen, setItemWhoOpen] = useState(null);

  const openAboutAsteroid = (item) => {
    setIsOpenAboutAsteroid(true); 
    setIsBasket(false)
    setIsAsteroid(false);

    loadAboutConvergenceAsteroid(item);
  };

  const openBasket = () => {
    setIsOpenAboutAsteroid(false); 
    setIsBasket(true)
    setIsAsteroid(false);
  };

  const openAsteroid = () => {
    setIsOpenAboutAsteroid(false);
    setIsAsteroid(true);
    setIsBasket(false); 
  };

  const loadAboutConvergenceAsteroid = (item) => {
    const url = item["links"].self;
      
    axios.get(url).then((responce) => {
      setItemWhoOpen(responce.data);
    });
  };

  return [
    isAsteroids,
    isOpenAboutAsteroid,
    setIsOpenAboutAsteroid,
    openAboutAsteroid,
    itemWhoOpen,
    isBasket, 
    setIsBasket,
    openBasket,
    openAsteroid,
  ];
};

export default useOpenComponent;