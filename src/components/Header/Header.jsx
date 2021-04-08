import React from 'react';

import './Header.scss' ;

const Header = () => {

  return (
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
          Астероиды Уничтожение 
        </span>
      </div>
    </div>
  )
};

export default Header
