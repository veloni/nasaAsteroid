import React from 'react'

import Header from '../Header/Header';
import Switcher from '../Switcher/Switcher';
import AboutAsteroid from '../AboutAsteroid/AboutAsteroid';
import RenderAsteroids from '../RenderAsteroids/RenderAsteroids';
import BasketDestroyAsteroid from '../BasketDestroyAsteroid/BasketDestroyAsteroid';

import useLoadDataAsteroids from '../../hooks/useLoadDataAsteroids';
import useSwitcherDistance from '../../hooks/useSwitcherDistance';
import useOpenComponent from '../../hooks/useOpenComponent';
import useloadToBasket from '../../hooks/useloadToBasket';

import './Body.scss' 

const Body = () => {
  const [dataAsteroids] = useLoadDataAsteroids();

  const [] = useloadToBasket();

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
    isBasket, 
    setIsBasket,
    openBasket,
    openAsteroid,
   ] = useOpenComponent();

  return (
    <div className="body-main-section">
      <div className="wrapper-body">
        <Header
          openBasket={openBasket}
          openAsteroid={openAsteroid}
        />
        {!isOpenAboutAsteroid && !isBasket &&
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
          {isOpenAboutAsteroid && !isBasket &&
            <AboutAsteroid
              itemWhoOpen={itemWhoOpen}
            />
          }
          {!isOpenAboutAsteroid && isBasket &&
            <BasketDestroyAsteroid
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