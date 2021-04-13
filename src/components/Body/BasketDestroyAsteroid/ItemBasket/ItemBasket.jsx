import React from 'react';

import './ItemBasket.scss' 

import { 
  nameAsteroidBasket
} from '../../../../helper';

const ItemBasket = (item) => (
  <div className="wrapper-item-basket"> 
    <span>
      {nameAsteroidBasket(item)} 
    </span> 
    <span className="chuck-noris">
      &nbsp; Будет Уничтожен лично Чаком 
    </span> 
  </div>
);

export default ItemBasket;
