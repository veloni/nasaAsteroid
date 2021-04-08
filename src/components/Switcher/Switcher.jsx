import React from 'react'

import './Switcher.scss' 

const Switcher = () => {

  return (
    <div className="wrapper-switcher">
      <span>
        <input type="checkbox"/>
        Показать только опасные
      </span>
      <span>
        Расстояние в километрах, в дистанциях до луны
      </span>
    </div>
  )
};

export default Switcher