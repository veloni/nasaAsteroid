import React from 'react';

import './Header.scss' ;

const Header = ({
  openBasket,
  openAsteroid,
  isAsteroids,
}) => (
  <div className="wrapper-header"> 
    <div className="wrapper-left-title"> 
      <span className="header-main-title">
        ARMAGGEDON V
      </span>
      <span className="header-title-about">
        Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
      </span> 
    </div>
    <div className="wrapper-swticher">
      <span className="header-title-about word-space-header">
        <span
          className={!isAsteroids ? "text-active-distance text-switcher" : "text-dont-active-distance text-switcher"}
          onClick={() => openAsteroid()}
        >
          Астероиды 
        </span> 
        <span
         className={isAsteroids ? "text-active-distance" : "text-dont-active-distance"}
          onClick={() => openBasket()}
        >
          Уничтожение
        </span> 
      </span>
    </div>
  </div>
);

export default Header
