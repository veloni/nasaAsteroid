import React from 'react'

import './Switcher.scss' 

const Switcher = ({
  isLunarDistance,
  switchToLunar,
  switchToKillometr,
  isAsteroidDangerous, 
  setIsAsteroidDangerous,
}) => (
  <div className="wrapper-switcher">
    <div className="swither-check-box">
      <div className="wrapper-check-box">
        <input 
          className="check-box"
          type="checkbox"
          onClick={() => setIsAsteroidDangerous(!isAsteroidDangerous)}
        />  
      </div>
      <span className="text-check-box">
        Показать только опасные
      </span>
    </div>
    <div className="wrapper-active-distance">
      Расстояние
      <span
        className={isLunarDistance ? "text-active-distance" : "text-dont-active-distance"}
        onClick={() => switchToKillometr()}
      > 
        &nbsp;
        в километрах, 
      </span>
      &nbsp;&nbsp;
      <span
        className={!isLunarDistance ? "text-active-distance" : "text-dont-active-distance"}
        onClick={() => switchToLunar()}
      >
       в дистанциях до луны
      </span>
    </div>
  </div>  
);

export default Switcher