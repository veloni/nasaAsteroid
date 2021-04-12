import React from 'react';

import Dino from './svg/Dino.svg';
import AsteroidSvg from './svg/Asteroid.svg'

import { 
  nameAsteroid,
  dateAsteroid, 
  distanceAsteroidLunar,
  sizeAsteroid,
}  from '../../helper';


import './Asteroid.scss' ;

const Asteroid = ({ item }) => {

  return (
    <div 
      className={item.is_potentially_hazardous_asteroid ? "dangerous-asteroid-box box-asteroid" : "dont-dangerous-asteroid-box box-asteroid" }
    > 
      <img
        alt="dino"
        className="dino"
        src={Dino}
      />
      <img
        alt="asteroid"
        className="asteroid"
        src={AsteroidSvg}
      />
      <div className="wrapper-asteroid-data">
        <span className="name-asteroid">
          {nameAsteroid(item)}
        </span>
        <span className="text-about-asteroid">
          Дата {dateAsteroid(item)}
        </span>
        <span className="text-about-asteroid">
          Расстояние {distanceAsteroidLunar(item)} км
        </span>
        <span className="text-about-asteroid">
          Размер {sizeAsteroid(item)} м
        </span>
      </div>
      <div className="wrapper-destroy-asteroid">
        <span className="appraisal">
          Оценка: <br/> 
          <span
            className={item.is_potentially_hazardous_asteroid ? "dangerous-asteroid-title" : "dont-dangerous-asteroid-title" }
          >
          </span>
        </span>
        <button className="button-destroy-asteroid">
          На уничтожение
        </button>
      </div>
    </div>
  )
};

export default Asteroid;