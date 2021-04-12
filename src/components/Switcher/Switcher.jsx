import React from 'react'

import './Switcher.scss' 

const Switcher = ({
  isLunarDistance,
  switchToLunar,
  switchToKillometr,
  isAsteroidDangerous, 
  setIsAsteroidDangerous,
}) => {

  return (
    <div className="wrapper-switcher">
      <span>
        <input 
          type="checkbox"
          checked={isAsteroidDangerous}
          onClick={() => setIsAsteroidDangerous(!isAsteroidDangerous)}
        />
        Показать только опасные
      </span>
      <div>
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
  )
};

export default Switcher