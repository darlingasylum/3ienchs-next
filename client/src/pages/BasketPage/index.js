import React from 'react';
import { useSelector } from 'react-redux';

import Basket from '../../components/Basket';
import Title from '../../components/Title';
import Cards from './components/Cards';
import Calendar from './../../components/Calendar';

const basketSelector = state => state.basket.articles;

const BasketPage = props => {
  let products = useSelector(basketSelector);

  return (
    <div className='hero mt-10 w-full'>
      <Basket></Basket>
      <Title title='Votre panier'></Title>
      <Cards products={products}></Cards>
      {products.length > 0 && <Calendar></Calendar>}
    </div>
  );
};

export default BasketPage;
