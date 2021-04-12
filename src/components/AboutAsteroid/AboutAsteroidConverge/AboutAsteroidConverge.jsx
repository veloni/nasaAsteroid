
import React, {useEffect} from 'react';

import { 
  dateAsteroid
}  from '../../../helper';

import './AboutAsteroidConverge.scss' 

const AboutAsteroidConverge = ({item}) => {
  console.log(item);

  /* console.log(item.relative_velocity.kilometers_per_hour);  скорость */
 /*  console.log(item.close_approach_date);  сближение */
    console.log(item.miss_distance.kilometers);

  return (
    <div className="wrapper-converge-asteroid"> 
      <span className="wrapper-converge-text">
        {`Дата максимального сближения ${item.close_approach_date}`}
      </span>
      <span className="wrapper-converge-text">
        {`Скорость относительно земли ${item.relative_velocity.kilometers_per_hour}`}
      </span>
      <span className="wrapper-converge-text">
        {`Расстояние до Земли ${item.miss_distance.kilometers}`}
      </span>
      <span className="wrapper-converge-text">
        {`Вокруг чьей орбиты летит ${item.orbiting_body}`}
      </span>
      <span>
        
      </span>
    </div>
  )
};

export default AboutAsteroidConverge
