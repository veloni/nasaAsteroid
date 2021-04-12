import React from 'react'

import Header from '../Header/Header';
import Switcher from '../Switcher/Switcher';
import AboutAsteroid from '../AboutAsteroid/AboutAsteroid';
import RenderAsteroids from '../RenderAsteroids/RenderAsteroids';

import useLoadDataAsteroids from '../../hooks/useLoadDataAsteroids';
import useSwitcherDistance from '../../hooks/useSwitcherDistance';
import useOpenAboutAsteroid from '../../hooks/useOpenAboutAsteroid';

import './Body.scss' 

const Body = () => {
  const [dataAsteroids] = useLoadDataAsteroids();

  const [
    isLunarDistance,
    isAsteroidDangerous, 
    setIsAsteroidDangerous,
    switchToLunar,
    switchToKillometr,
   ] = useSwitcherDistance();

   const [
    isOpenAboutAsteroid,
    setIsOpenAboutAsteroid,
    openAboutAsteroid,
    itemWhoOpen,
   ] = useOpenAboutAsteroid();

  return (
    <div className="body-main-section">
      <div className="wrapper-body">
        <Header/>
        {!isOpenAboutAsteroid &&
          <div>
            <Switcher
              isLunarDistance={isLunarDistance}
              switchToLunar={switchToLunar}
              switchToKillometr={switchToKillometr}
              isAsteroidDangerous={isAsteroidDangerous}
              setIsAsteroidDangerous={setIsAsteroidDangerous}
            />
            <RenderAsteroids
              dataAsteroids={dataAsteroids}
              isLunarDistance={isLunarDistance}
              isAsteroidDangerous={isAsteroidDangerous}
              isOpenAboutAsteroid={isOpenAboutAsteroid}
              setIsOpenAboutAsteroid={setIsOpenAboutAsteroid}
              openAboutAsteroid={openAboutAsteroid}
            />
          </div>}
          {isOpenAboutAsteroid &&
            <AboutAsteroid
              itemWhoOpen={itemWhoOpen}
            />
          }
        <footer className="wrapper-footer">
          2021 © Все права и планета защищены
        </footer>
      </div>
    </div>
  )
};

export default Body