import React from 'react';

import ItemBasket from './ItemBasket/ItemBasket'

import './BasketDestroyAsteroid.scss' 

const BasketDestroyAsteroid = ({
  arrayBasket,
  destroyAsteroid,
}) => (
  <div>
    {arrayBasket.length !== 0 && 
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
        Уничтожить
      </button>
    </div>}
    {arrayBasket.length === 0 &&
    <span className="empty-basket">
      Ничего не добавлено
    </span>}
  </div>
);

export default BasketDestroyAsteroid;
