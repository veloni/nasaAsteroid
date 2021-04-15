import React from 'react';

import { 
  dateConverge,
  velocityKillometr,
  distanceKillometr,
  orbitBody,
} from '../../../../helper';

import './AboutAsteroidConverge.scss' 

const AboutAsteroidConverge = ({
  item,
  index,
}) => (
  <div className="wrapper-converge-asteroid"> 
    <span className="wrapper-converge-id">
      {index + 1}
    </span>
    <div className="wrapper-converge-text">
      <span>
        Дата максимального сближения:
      </span>
      <span>
        {dateConverge(item)}
      </span>
    </div>
    <div className="wrapper-converge-text">
      <span>
        Скорость относительно земли:
      </span>
      <span>
        {`${velocityKillometr(item)} КМ/Ч`}
      </span>
    </div>
    <div className="wrapper-converge-text">
      <span>
        Расстояние до Земли:
      </span>
      <span>
        {`${distanceKillometr(item)} КМ`}
      </span>
    </div>
    <div className="wrapper-converge-text">
      <span>
        Вокруг чьей орбиты летит:
      </span>
      <span>
        {orbitBody(item)}
      </span>
    </div>
  </div>
);

export default AboutAsteroidConverge;
