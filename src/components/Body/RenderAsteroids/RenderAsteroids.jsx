import React from 'react';

import Asteroid from './Asteroid/Asteroid';

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
       <div id="cube-loader">
        <div className="caption">
          <div className="cube-loader">
            <div className="cube loader-1"></div>
            <div className="cube loader-2"></div>
            <div className="cube loader-4"></div>
            <div className="cube loader-3"></div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default RenderAsteroids;
