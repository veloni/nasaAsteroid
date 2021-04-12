import { useState, useEffect } from 'react';

import axios from 'axios';

const useOpenAboutAsteroid = () => {
  const [isOpenAboutAsteroid, setIsOpenAboutAsteroid] = useState(false);
  const [itemWhoOpen, setItemWhoOpen] = useState(null);


  const openAboutAsteroid = (item) => {
    setIsOpenAboutAsteroid(!isOpenAboutAsteroid); 

    loadAboutConvergenceAsteroid(item);
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
  ];
};

export default useOpenAboutAsteroid;