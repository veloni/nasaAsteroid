import React from 'react';

import Dino from './svg/Dino.svg';
import AsteroidSvg from './svg/Asteroid.svg'

import './Asteroid.scss' ;

const Asteroid = () => {
  return (
    <div 
      className="wrapper-asteroid"
    > 
      <div className="box-asteroid"> 
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
            test
          {/*     {item.name}  */}
          </span>
          <span className="text-about-asteroid">
            дата 
          </span>
          <span className="text-about-asteroid">
            размер  {/* {item.estimated_diameter.meters.estimated_diameter_max}  */}
          </span>
          <span className="text-about-asteroid">
            размер 31414 12312321312
          </span>
        </div>
        <div className="wrapper-destroy-asteroid">
          <span className="appraisal">
            Оценка: <br/> не опасен
          </span>
          <button className="button-destroy-asteroid">
            На уничтожение
          </button>
        </div>
      </div>
    </div>
  )
};

export default Asteroid;