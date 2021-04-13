import {useState, useEffect} from 'react';

const useScroll = () => {
  const [isLenghtAsteroid, setIsLenghtAsteroid] = useState(6);
  const [delay, setDelay] = useState(true);

  useEffect(() => { 
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [delay]); 

  const handleScroll = () => {
    if (delay && window.scrollY + 500 < document.body.clientHeight) {  
      setIsLenghtAsteroid(isLenghtAsteroid + 1);
      setDelay(false);

      setTimeout(() => {
        setDelay(true);
      }, 350);
    }   
  };

  return [
    isLenghtAsteroid,
    setIsLenghtAsteroid,
  ];
};

export default useScroll;