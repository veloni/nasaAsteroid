import { useState } from 'react';

const useSwitcherDistance = () => {
  const [isLunarDistance, setIsLunarDistance] = useState(false);
  const [isAsteroidDangerous, setIsAsteroidDangerous] = useState(false);

  const switchToLunar = () => {
    setIsLunarDistance(true);
  };

  const switchToKillometr = () => {
    setIsLunarDistance(false);
  };

  return [
    isLunarDistance,
    isAsteroidDangerous, 
    setIsAsteroidDangerous,
    switchToLunar,
    switchToKillometr,
  ];
};

export default useSwitcherDistance;