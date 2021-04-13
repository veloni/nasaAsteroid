import React from 'react';

import AboutAsteroidConverge from './AboutAsteroidConverge/AboutAsteroidConverge';
import loader from './loader/chuck.jpg';

import { 
  nameAsteroid,
  distanceAsteroidLunar,
  distanceAsteroidKillometr,
  sizeAsteroid,
  isDangerousAsteroid,
  absoluteMagnitudeAsteroid,
  idAsteroid
} from '../../../helper';

import './AboutAsteroid.scss' 

const AboutAsteroid = ({ itemWhoOpen }) => (
  itemWhoOpen && <div className="wrapper-about-asteroid"> 
    <span className="about-name">
      {`Имя обьекта ${nameAsteroid(itemWhoOpen)}`}
    </span> 
    <div className="main-wrapper-data"> 
      <div className="wrapper-data">
        <span className="wrapper-text">
          {`В дистанциях до луны ${distanceAsteroidLunar(itemWhoOpen)}`}
        </span>
        <span className="wrapper-text">
          {`Дистанция ${distanceAsteroidKillometr(itemWhoOpen)}км`}
        </span>
        <span className="wrapper-text">
          {isDangerousAsteroid(itemWhoOpen) ? "Это опасный астероид" : "Это не опасный астероид"}
        </span>
      </div>
      <div className="wrapper-data">
        <span className="wrapper-text">
          {`Размер ${sizeAsteroid(itemWhoOpen)}м`}
        </span>
        <span className="wrapper-text">
          {`Магнитуда астероида ${absoluteMagnitudeAsteroid(itemWhoOpen)}`}
        </span> 
        <span className="wrapper-text">
          {`id астероида ${idAsteroid(itemWhoOpen)}`}
        </span> 
      </div> 
    </div>
    <div className="wrapper-about-converge">  
      {!itemWhoOpen && 
        <img
          src={loader}
        />
      } 
      {itemWhoOpen && itemWhoOpen.close_approach_data.map((item, index) => (
        <AboutAsteroidConverge
          item={item}
          index={index}
        />
      ))}
    </div>
  </div>
);

export default AboutAsteroid
