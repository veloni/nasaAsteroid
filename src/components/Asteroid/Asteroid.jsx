import React from 'react';

import Dino from './svg/Dino.svg';
import AsteroidSvg from './svg/Asteroid.svg'

import { dateAsteroid }  from '../../helper';

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
          {item.name}
        </span>
        <span className="text-about-asteroid">
          Дата {item.close_approach_data[0]["close_approach_date"]}
        </span>
        <span className="text-about-asteroid">
          Расстояние {item.close_approach_data[0].miss_distance["lunar"]}
        </span>
        <span className="text-about-asteroid">
          Размер {item.estimated_diameter["meters"].estimated_diameter_max/2 + item.estimated_diameter["meters"].estimated_diameter_min/2}
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