import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { APICall } from './../../../utils/APICall';

import Basket from '../../components/Basket';
import Title from '../../components/Title';
import Cards from './components/Cards';
import Calendar from './../../components/Calendar';
import Button from './../../components/Button';
import { calculatePrice, countArticles } from './../../../utils/calculatePrice';

const basketSelector = state => state.basket.articles;

const BasketPage = props => {
  let basket = useSelector(basketSelector);
  const [pickupDate, setDate] = useState(new Date());

  const handleValidate = () => {
    console.log('coucou');
    console.log('basket', basket);
    const data = {
      order_pickupdate: pickupDate,
      order_price: calculatePrice(countArticles(basket)),
      order_over: 0,
      basket: basket
    };
    const fetch_param = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    };
    APICall('http://localhost:4000/api/orders/makeOrder', fetch_param).then(
      response => {
        console.log(response);
        // this.props.DeleteWholePanier();
        // this.props.history.push("/login");
      }
    );
  };

  const getDate = date => {
    setDate(date);
  };

  if (basket.length === 0) {
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
      <Cards products={basket}></Cards>
      <Calendar pickupDate={pickupDate} getDate={getDate} />
      <Button onClick={handleValidate} className='f2'>
        Valider la commande
      </Button>
    </div>
  );
};

export default BasketPage;
