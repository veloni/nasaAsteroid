import React from 'react'

import Header from '../Header/Header';
import Switcher from '../Switcher/Switcher';
import AboutAsteroid from './AboutAsteroid/AboutAsteroid';
import RenderAsteroids from './RenderAsteroids/RenderAsteroids';
import BasketDestroyAsteroid from './BasketDestroyAsteroid/BasketDestroyAsteroid';

import useLoadDataAsteroids from '../../hooks/useLoadDataAsteroids';
import useSwitcherDistance from '../../hooks/useSwitcherDistance';
import useOpenComponent from '../../hooks/useOpenComponent';
import useLoadBasket from '../../hooks/useLoadDataBasket';

import './Body.scss' 

const Body = () => {
  const [
    dataAsteroids,
    setDataAsteroid,
  ] = useLoadDataAsteroids();

  const [
    destroyedAsteroid,
    arrayBasket,
    addAsteroidInBasket,
    destroyAsteroid,
  ] = useLoadBasket(
    dataAsteroids, 
    setDataAsteroid);

  const [
    isLunarDistance,
    isAsteroidDangerous, 
    setIsAsteroidDangerous,
    switchToLunar,
    switchToKillometr,
   ] = useSwitcherDistance();

   const [
    isAsteroids,
    isOpenAboutAsteroid,
    setIsOpenAboutAsteroid,
    openAboutAsteroid,
    itemWhoOpen,
    isBasket, 
    openBasket,
    openAsteroid,
   ] = useOpenComponent();

  return (
    <div className="body-main-section">
      <div className="wrapper-body">
        <Header
          openBasket={openBasket}
          openAsteroid={openAsteroid}
          isAsteroids={isAsteroids}
        />
        {isAsteroids &&
          <div className="wrapper-switcher-render">
            <Switcher
              isLunarDistance={isLunarDistance}
              switchToLunar={switchToLunar}
              switchToKillometr={switchToKillometr}
              isAsteroidDangerous={isAsteroidDangerous}
              setIsAsteroidDangerous={setIsAsteroidDangerous}
            />
            <RenderAsteroids
              dataAsteroids={dataAsteroids}
              destroyedAsteroid={destroyedAsteroid}
              isLunarDistance={isLunarDistance}
              isAsteroidDangerous={isAsteroidDangerous}
              isOpenAboutAsteroid={isOpenAboutAsteroid}
              setIsOpenAboutAsteroid={setIsOpenAboutAsteroid}
              openAboutAsteroid={openAboutAsteroid}
              addAsteroidInBasket={addAsteroidInBasket}
            />
          </div>}
          {isOpenAboutAsteroid &&
            <AboutAsteroid
              itemWhoOpen={itemWhoOpen}
            />}
          {isBasket &&
            <BasketDestroyAsteroid
              arrayBasket={arrayBasket}
              destroyAsteroid={destroyAsteroid}
            />}
        <footer className="wrapper-footer">
          2021 © Все права и планета защищены
        </footer>
      </div>
    </div>
  )
};

export default Body