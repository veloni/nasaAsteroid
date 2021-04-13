import React from 'react';

import Dino from './svg/Dino.svg';
import AsteroidSvg from './svg/Asteroid.svg'

import { 
  nameAsteroid,
  dateAsteroid, 
  distanceAsteroidLunar,
  distanceAsteroidKillometr,
  sizeAsteroid,
  isDangerousAsteroid,
  sizeAsteroidSvg,
} from '../../../../helper';

import './Asteroid.scss' ;

const Asteroid = ({ 
  item,
  isLunarDistance,
  isAsteroidDangerous,
  openAboutAsteroid,
  addAsteroidInBasket,
  isLenghtAsteroid,
}) => (
  (isLenghtAsteroid &&
    isAsteroidDangerous &&
  !isDangerousAsteroid(item)) || 
  <div
    className="wrapper-asteroid"
  >
    <div 
      className={isDangerousAsteroid(item) ? "dangerous-asteroid-box box-asteroid" : "dont-dangerous-asteroid-box box-asteroid"}
    > 
      <div className="wrapper-dino-asteroid">
        <img
          alt="dino"
          className="dino"
          src={Dino}
        />
        <img
          alt="asteroid"
          className="asteroid"
          style={{
            transform: `scale(${sizeAsteroidSvg(sizeAsteroid(item))})`,
          }}
          src={AsteroidSvg}
        />
      </div>
      <div className="wrapper-asteroid-data">
        <span 
          className="name-asteroid"
          onClick={() => openAboutAsteroid(item)}
        >
          {nameAsteroid(item)}
        </span>
        <div className="text-about-asteroid">
          <span>
            Дата
          </span>
        <span className="points"/>
          <span>
            {dateAsteroid(item)}
          </span>
        </div>
        <div className="text-about-asteroid">
          <span>
            Расстояние
          </span>
          <span className="points"/>
          <span>
            {isLunarDistance && distanceAsteroidLunar(item)}
            {!isLunarDistance && `${distanceAsteroidKillometr(item)} км`} 
          </span>
        </div>
        <div className="text-about-asteroid">
          <span>
            Размер
          </span>
          <span className="points"/>
          <span>
          {sizeAsteroid(item)} м
          </span>
        </div>
      </div>
      <div className="wrapper-destroy-asteroid">
        <span className="appraisal">
          Оценка:
          <span className="text-is-dangerous" >
            {isDangerousAsteroid(item) ? "Опасно" : "Не опасно"}
          </span>
        </span>
        <button 
          className="button-destroy-asteroid"
          onClick={() => addAsteroidInBasket(item)}
        >
          На уничтожение
        </button>
      </div>
    </div>
  </div>
);

export default Asteroid;