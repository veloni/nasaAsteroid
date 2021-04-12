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
     Будет Уничтожен лично Чаком Норисом
    </span> 
  </div>
)

export default ItemBasket;
