import React from 'react';

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
  <div > 
    {dataAsteroids && Object.keys(dataAsteroids.near_earth_objects).map((keyNasa) => (
      dataAsteroids.near_earth_objects[keyNasa].map((item, index) => (
        <Asteroid
          key={index}
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
        alt="loader"
        src={loader}
       />
     }
  </div>
);


export default RenderAsteroids;
