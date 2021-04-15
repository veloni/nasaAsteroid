import React from 'react';

import Asteroid from './Asteroid/Asteroid';
import Loader from '../../Loader/Loader';

import './RenderAsteroids.scss' ;

const RenderAsteroids = ({ 
  dataAsteroids,
  isLunarDistance,
  isAsteroidDangerous,
  openAboutAsteroid,
  addAsteroidInBasket,
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
                index={index}
                item={item}
                isLunarDistance={isLunarDistance}
                isAsteroidDangerous={isAsteroidDangerous}
                openAboutAsteroid={openAboutAsteroid}
                addAsteroidInBasket={addAsteroidInBasket}
                keyNasa={keyNasa}
            />)
          } else {
            return null
          }
        })
      ))}
      {!dataAsteroids && <Loader/>}
    </div>
  );
}

export default RenderAsteroids;
