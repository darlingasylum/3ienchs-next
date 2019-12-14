import React from 'react';
import { useSelector } from 'react-redux';

import Basket from '../../components/Basket';
import Title from '../../components/Title';
import Cards from './components/Cards';
import Calendar from './../../components/Calendar';
import Button from './../../components/Button';

const basketSelector = state => state.basket.articles;

const BasketPage = props => {
  let products = useSelector(basketSelector);

  const handleValidate = () => {
    console.log('coucou');
  };

  if (products.length === 0) {
    return (
      <div className='hero mt-10 w-full'>
        <Basket></Basket>
        <Title title='Votre panier'></Title>
        <div> Votre panier est vide</div>
      </div>
    );
  }

  return (
    <div className='hero mt-10 w-full'>
      <Basket></Basket>
      <Title title='Votre panier'></Title>
      <Cards products={products}></Cards>
      <Calendar />
      <Button onClick={handleValidate} className='f2'>
        Valider la commande
      </Button>
    </div>
  );
};

export default BasketPage;
