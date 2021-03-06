import { useState, useEffect } from 'react';

import axios from 'axios';

const useLoadDataAsteroid = () => {
  const [dataAsteroids, setDataAsteroids] = useState(null);

    useEffect(() => {
      const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-11-01&end_date=2019-11-07&api_key=Oa24kgH9nyOckx44hes9BfkdN5kdcQDViNccVa8L'; 

      axios.get(url).then((responce) => {
        setDataAsteroids(responce.data);
      });
    
    },[]);

  return [
    dataAsteroids, 
    setDataAsteroids,
  ];
};

export default useLoadDataAsteroid;