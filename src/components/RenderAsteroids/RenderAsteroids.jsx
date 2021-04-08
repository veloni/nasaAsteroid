import React from 'react';

import Asteroid from '../Asteroid/Asteroid';

import './RenderAsteroids.scss' ;

const RenderAsteroids = ({ dataAsteroids }) => {

  console.log(dataAsteroids && dataAsteroids.near_earth_objects);
  console.log(dataAsteroids && Object.keys(dataAsteroids.near_earth_objects));

  let keysNasa = [];
  let testIndex = 0;
  if (dataAsteroids) {keysNasa = Object.keys(dataAsteroids.near_earth_objects)}

/*   console.log(keysNasa); */

  if (dataAsteroids) {
    keysNasa.forEach(keys => {
      dataAsteroids.near_earth_objects[keys].map((item) => (
				console.log(testIndex++)
			));
    });
  }

  return (
    dataAsteroids && dataAsteroids.near_earth_objects["2021-05-12"].map((item, key) => (
				<Asteroid
				
				/>
			))

  )
};

export default RenderAsteroids;
