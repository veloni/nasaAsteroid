import React from 'react';

import Asteroid from './Asteroid/Asteroid';

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
  isLenghtAsteroid,
}) => {
  let qunaity = 0;
  return(
    <div> 
      {dataAsteroids && Object.keys(dataAsteroids.near_earth_objects).map((keyNasa) => (
        dataAsteroids.near_earth_objects[keyNasa].map(function(item, index) {
          if (qunaity < isLenghtAsteroid) {
            qunaity++;
            return(
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
            />)
          } else {
            return null
          }
        })
      ))}
      {!dataAsteroids && 
        <img
          alt="loader"
          src={loader}
        />}
    </div>
  );
}

export default RenderAsteroids;
