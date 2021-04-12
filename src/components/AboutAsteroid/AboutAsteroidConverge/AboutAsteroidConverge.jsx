
import React, {useEffect} from 'react';

import { 
  nameAsteroid,
  distanceAsteroidLunar,
  distanceAsteroidKillometr,
  sizeAsteroid,
  isDangerousAsteroid,
  absoluteMagnitudeAsteroid,
  idAsteroid
}  from '../../../helper';

import './AboutAsteroidConverge.scss' 

const AboutAsteroidConverge = ({item}) => {
 
  console.log(item.orbiting_body);

  return (
    <div className="wrapper-converge-asteroid"> 
      {item.orbiting_body}
    </div>
  )
};

export default AboutAsteroidConverge
