import React, { useState} from 'react';

import Asteroid from '../Asteroid/Asteroid';

import InfiniteScroll from 'react-infinite-scroll-component';

import './RenderAsteroids.scss' ;

const RenderAsteroids = ({ dataAsteroids }) => {
  let lenghtRender = 0;

  const [stateLenghtRender, setStateLenghtRender] = useState(3);

  return (
    <div 
    className="wrapper-asteroid"
  > 
    <button
      onClick={(e) => setStateLenghtRender(stateLenghtRender+1)}
    >
    </button>

    {dataAsteroids && Object.keys(dataAsteroids.near_earth_objects).map(function(keyNasa) {
      return(
        dataAsteroids.near_earth_objects[keyNasa].map(function(item) {
          if (lenghtRender < stateLenghtRender){
            lenghtRender++;
            return(
              <Asteroid
                item={item}
              />
            )
          }
          else { 
          return(
            null
            )
          }
        })
        )
      })} 
    </div>
  )
};

export default RenderAsteroids;
