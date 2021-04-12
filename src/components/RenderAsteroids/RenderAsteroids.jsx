import React from 'react';

import Asteroid from '../Asteroid/Asteroid';

import './RenderAsteroids.scss' ;

const RenderAsteroids = ({ dataAsteroids }) => {
  return (
    <div 
    className="wrapper-asteroid"
  > 
    {
      dataAsteroids && Object.keys(dataAsteroids.near_earth_objects).map((keyNasa) => (
        dataAsteroids.near_earth_objects[keyNasa].map((item) => (
            <Asteroid
              item={item}
            />
        ))  
      ))  
    }
    </div>
  )
};

export default RenderAsteroids;
