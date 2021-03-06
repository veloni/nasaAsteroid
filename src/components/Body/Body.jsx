import React from 'react';

import Header from '../Header/Header';
import Switcher from '../Switcher/Switcher';
import AboutAsteroid from './AboutAsteroid/AboutAsteroid';
import RenderAsteroids from './RenderAsteroids/RenderAsteroids';
import BasketDestroyAsteroid from './BasketDestroyAsteroid/BasketDestroyAsteroid';

import useLoadDataAsteroids from '../../hooks/useLoadDataAsteroids';
import useSwitcherDistance from '../../hooks/useSwitcherDistance';
import useOpenComponent from '../../hooks/useOpenComponent';
import useLoadBasket from '../../hooks/useLoadDataBasket';
import useScroll from '../../hooks/useScroll';

import './Body.scss';

const Body = () => {
  const [
    dataAsteroids,
    setDataAsteroid,
  ] = useLoadDataAsteroids();

  const [
    arrayBasket,
    addAsteroidInBasket,
    destroyAsteroid,
  ] = useLoadBasket(
    dataAsteroids, 
    setDataAsteroid,
  );

  const [
    isLunarDistance,
    isAsteroidDangerous, 
    setIsAsteroidDangerous,
    setIsLunarDistance,
   ] = useSwitcherDistance();

   const [
    isAsteroids,
    isOpenAboutAsteroid,
    openAboutAsteroid,
    itemWhoOpen,
    isBasket, 
    openBasket,
    openAsteroid,
   ] = useOpenComponent();

   const [
    isLenghtAsteroid,
   ] = useScroll();

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
              setIsLunarDistance={setIsLunarDistance}
              isAsteroidDangerous={isAsteroidDangerous}
              setIsAsteroidDangerous={setIsAsteroidDangerous}
            />
            <RenderAsteroids
              dataAsteroids={dataAsteroids}
              isLunarDistance={isLunarDistance}
              isAsteroidDangerous={isAsteroidDangerous}
              openAboutAsteroid={openAboutAsteroid}
              addAsteroidInBasket={addAsteroidInBasket}
              isLenghtAsteroid={isLenghtAsteroid}
            />
            <footer className="wrapper-footer">
              2021 ?? ?????? ?????????? ?? ?????????????? ????????????????
            </footer>
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
      </div>
    </div>
  )
};

export default Body