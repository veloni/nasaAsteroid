import React, { useState} from 'react';

import Asteroid from '../Asteroid/Asteroid';

import InfiniteScroll from 'react-infinite-scroll-component';

import './RenderAsteroids.scss' ;

const RenderAsteroids = ({ 
  dataAsteroids, 
  isLunarDistance,
  isAsteroidDangerous,
  isOpenAboutAsteroid,
  setIsOpenAboutAsteroid,
  openAboutAsteroid,
}) => {

  return (
    <div 
    className="wrapper-asteroid"
  > 
    {dataAsteroids && Object.keys(dataAsteroids.near_earth_objects).map((keyNasa) => (
        dataAsteroids.near_earth_objects[keyNasa].map((item) => (
            <Asteroid
              item={item}
              isLunarDistance={isLunarDistance}
              isAsteroidDangerous={isAsteroidDangerous}
              isOpenAboutAsteroid={isOpenAboutAsteroid}
              setIsOpenAboutAsteroid={setIsOpenAboutAsteroid}
              openAboutAsteroid={openAboutAsteroid}
            />
        ))  
      ))}
    </div>
  )
};

export default RenderAsteroids;
