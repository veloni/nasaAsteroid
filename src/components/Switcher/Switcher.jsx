import React from 'react'

import './Switcher.scss' 

const Switcher = ({
  isLunarDistance,
  setIsLunarDistance,
  isAsteroidDangerous, 
  setIsAsteroidDangerous,
}) => (
  <div className="wrapper-switcher">
    <div className="swither-check-box">
      <div className="wrapper-check-box">
        <input 
          className="check-box"
          type="checkbox"
          defaultChecked={isAsteroidDangerous}
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
        onClick={() => setIsLunarDistance(false)}
      > 
        &nbsp;
        в километрах, 
      </span>
      &nbsp;&nbsp;
      <span
        className={!isLunarDistance ? "text-active-distance" : "text-dont-active-distance"}
        onClick={() => setIsLunarDistance(true)}
      >
       в дистанциях до луны
      </span>
    </div>
  </div>  
);

export default Switcher