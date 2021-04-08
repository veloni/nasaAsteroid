import React from 'react'

import Header from '../Header/Header';
import Switcher from '../Switcher/Switcher';
import RenderAsteroids from '../RenderAsteroids/RenderAsteroids';

import useLoadDataAsteroids from '../../hooks/useLoadDataAsteroids';

import './Body.scss' 

const Body = () => {
  const [dataAsteroids] = useLoadDataAsteroids();
  return (
    <div className="body-main-section">
      <div className="wrapper-body">
        <Header/>
        <Switcher/>
        <RenderAsteroids
          dataAsteroids={dataAsteroids}
        />
        <footer className="wrapper-footer">
          2021 © Все права и планета защищены
        </footer>
      </div>
    </div>
  )
};

export default Body