import { useState, useEffect } from 'react';

import axios from 'axios';

const useOpenComponent = () => {
  const [isOpenAboutAsteroid, setIsOpenAboutAsteroid] = useState(false);
  const [itemWhoOpen, setItemWhoOpen] = useState(null);
  const [isBasket, setIsBasket] = useState(false);

/*   useEffect(() => {
  
    document.title = `Вы нажали ${count} раз`;
  }); */


  const openAboutAsteroid = (item) => {
    setIsOpenAboutAsteroid(!isOpenAboutAsteroid); 

    loadAboutConvergenceAsteroid(item);
  };

  const openBasket = () => {
    setIsOpenAboutAsteroid(false);
    setIsBasket(true);
  };

  const openAsteroid = () => {
    setIsOpenAboutAsteroid(false);
    setIsBasket(false);
  };

  const loadAboutConvergenceAsteroid = (item) => {
    const url = item["links"].self;
      
    axios.get(url).then((responce) => {
      setItemWhoOpen(responce.data);
    });
  };

  return [
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