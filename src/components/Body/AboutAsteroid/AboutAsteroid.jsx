import React from 'react';

import AboutAsteroidConverge from './AboutAsteroidConverge/AboutAsteroidConverge';
import Loader from '../../Loader/Loader';

import { 
  nameAsteroid,
  distanceAsteroidLunar,
  distanceAsteroidKillometr,
  sizeAsteroid,
  styleAsteroidDangerous,
  absoluteMagnitudeAsteroid,
  idAsteroid
} from '../../../helper';

import './AboutAsteroid.scss' 

const AboutAsteroid = ({ itemWhoOpen }) => (
  <div>
    {!itemWhoOpen && 
    <div className="wrapper-about-asteroid">
      <Loader/>
    </div>
    }
    {itemWhoOpen && <div className="wrapper-about-asteroid"> 
      <span className="about-name">
        {`Имя обьекта ${nameAsteroid(itemWhoOpen)}`}
      </span> 
      <div className="main-wrapper-data"> 
        <div className="wrapper-data">
          <span className="wrapper-text">
            {`В дистанциях до луны: ${distanceAsteroidLunar(itemWhoOpen)}`}
          </span>
          <span className="wrapper-text">
            {`Дистанция: ${distanceAsteroidKillometr(itemWhoOpen)}км`}
          </span>
          <span className="wrapper-text">
            {styleAsteroidDangerous(itemWhoOpen) ? "Это опасный астероид" : "Это не опасный астероид"}
          </span>
        </div>
        <div className="wrapper-data">
          <span className="wrapper-text">
            {`Размер: ${sizeAsteroid(itemWhoOpen)}м`}
          </span>
          <span className="wrapper-text">
            {`Магнитуда астероида: ${absoluteMagnitudeAsteroid(itemWhoOpen)}`}
          </span> 
          <span className="wrapper-text">
            {`id астероида: ${idAsteroid(itemWhoOpen)}`}
          </span> 
        </div> 
      </div>
      <div className="wrapper-about-converge">  
        {itemWhoOpen && itemWhoOpen.close_approach_data.map((item, index) => (
          <AboutAsteroidConverge
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>}
  </div>
);

export default AboutAsteroid
