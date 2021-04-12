import React from 'react';

import ItemBasket from './ItemBasket/ItemBasket'

import './BasketDestroyAsteroid.scss' 

const BasketDestroyAsteroid = ({
  arrayBasket,
  destroyAsteroid,
}) => (
  <div 
    className="wrapper-basket"
  > 
    {arrayBasket.map((item) => (
      <ItemBasket
        arrayBasket={item}
      />
    ))}
    <button
      className="summoning-chack"
      onClick={() => destroyAsteroid()}
    >
      Destroy It
    </button>
  </div>
);


export default BasketDestroyAsteroid;
