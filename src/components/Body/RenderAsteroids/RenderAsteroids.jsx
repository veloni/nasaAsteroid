import React, { useState} from 'react';

import Asteroid from './Asteroid/Asteroid';

import InfiniteScroll from 'react-infinite-scroll-component';

import loader from './loader/chuck.jpg';

import './RenderAsteroids.scss' ;

const RenderAsteroids = ({ 
  dataAsteroids, 
  isLunarDistance,
  isAsteroidDangerous,
  isOpenAboutAsteroid,
  setIsOpenAboutAsteroid,
  openAboutAsteroid,
  addAsteroidInBasket,
  destroyedAsteroid,
}) => (
  <div 
    className="wrapper-asteroid"
  > 
    {dataAsteroids && Object.keys(dataAsteroids.near_earth_objects).map((keyNasa) => (
      dataAsteroids.near_earth_objects[keyNasa].map((item) => (
        <Asteroid
          item={item}
          destroyedAsteroid={destroyedAsteroid}
          isLunarDistance={isLunarDistance}
          isAsteroidDangerous={isAsteroidDangerous}
          isOpenAboutAsteroid={isOpenAboutAsteroid}
          setIsOpenAboutAsteroid={setIsOpenAboutAsteroid}
          openAboutAsteroid={openAboutAsteroid}
          addAsteroidInBasket={addAsteroidInBasket}
        />
      ))
    ))}
     {
      !dataAsteroids && 
      <img
        src={loader}
       />
     }
  </div>
);


export default RenderAsteroids;
