import { useState } from 'react';

const useSwitcherDistance = () => {
  const [isLunarDistance, setIsLunarDistance] = useState(false);
  const [isAsteroidDangerous, setIsAsteroidDangerous] = useState(false);
  
  return [
    isLunarDistance,
    isAsteroidDangerous, 
    setIsAsteroidDangerous,
    setIsLunarDistance,
  ];
};

export default useSwitcherDistance;