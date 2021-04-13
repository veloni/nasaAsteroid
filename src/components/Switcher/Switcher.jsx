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
      <input 
        className="check-box"
        type="checkbox"
        checked={isAsteroidDangerous}
        onClick={() => setIsAsteroidDangerous(!isAsteroidDangerous)}
      />
      Показать только опасные
    </div>
    <div className="wrapper-active-distance">
      Расстояние
      <span
        className={isLunarDistance ? "text-active-distance" : "text-dont-active-distance"}
        onClick={() => switchToKillometr()}
      > 
      в километрах, 
      </span>
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