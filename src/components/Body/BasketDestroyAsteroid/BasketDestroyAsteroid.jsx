import React from 'react';

import ItemBasket from './ItemBasket/ItemBasket'

import './BasketDestroyAsteroid.scss' 

const BasketDestroyAsteroid = ({
  arrayBasket,
  destroyAsteroid,
}) => (
  <div>
    {arrayBasket.length !== 0 && 
    <div className="wrapper-basket"> 
      <div className="wrapper-item-basket">
        {arrayBasket.map((item, index) => (
            <ItemBasket
              key={index}
              arrayBasket={item}
            />
        ))}
      </div>
      <button
        className="summoning-chack"
        onClick={() => destroyAsteroid()}
      >
        Уничтожить
      </button>
    </div>}
    {arrayBasket.length === 0 &&
     <div className="wrapper-basket">
      <span className="empty-basket">
        Ничего не добавлено
      </span>
    </div>}
  </div>
);

export default BasketDestroyAsteroid;
