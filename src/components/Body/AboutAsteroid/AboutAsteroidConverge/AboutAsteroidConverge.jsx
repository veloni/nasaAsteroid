
import React from 'react';

import { 
  dateConverge,
  velocityKillometr,
  distanceKillometr,
  orbitBody,
} from '../../../../helper';

import './AboutAsteroidConverge.scss' 

const AboutAsteroidConverge = ({item}) => (
  <div className="wrapper-converge-asteroid"> 
    <span className="wrapper-converge-text">
      {`Дата максимального сближения ${dateConverge(item)}`}
    </span>
    <span className="wrapper-converge-text">
      {`Скорость относительно земли ${velocityKillometr(item)}`}
    </span>
    <span className="wrapper-converge-text">
      {`Расстояние до Земли ${distanceKillometr(item)}`}
    </span>
    <span className="wrapper-converge-text">
      {`Вокруг чьей орбиты летит ${orbitBody(item)}`}
    </span>
  </div>
);

export default AboutAsteroidConverge
