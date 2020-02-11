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
  const [order, setOrder] = useState({});

  // Generate a random new order number
  const generateOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  // check if this number doesn't already exists in DB
  const checkOrderNumber = () => {
    const newOrderNumber = generateOrderNumber();

    APICall(
      `http://localhost:4000/api/orders/checkOrderNumber/${newOrderNumber}`
    )
      .then(response => {
        if (!response.success) {
          // if number order doesn't exist in database
          return newOrderNumber;
        } else {
          checkOrderNumber();
        }
      })
      .catch(err => console.log(err));
    return newOrderNumber;
  };

  // get order information with order id
  const getOrder = orderId => {
    APICall(`http://localhost:4000/api/orders/getOrderNumber/${orderId}`)
      .then(res => {
        setOrder(res.result[0]);
      })
      .catch(err => console.log(err));
  };

  //
  const handleValidate = () => {
    const orderNumber = checkOrderNumber();

    const data = {
      order_number: orderNumber,
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

    APICall('http://localhost:4000/api/orders/makeOrder', fetch_param)
      .then(response => {
        return response.orderId;
      })
      .then(orderId => {
        getOrder(orderId);
      })
      .then(window.scrollTo(0, document.body.scrollHeight))
      .catch(err => console.log(err));
  };

  const getDate = date => {
    setDate(date);
  };

  if (basket.length === 0) {
    return (
      <div className='hero mt-10 w-full'>
        <Basket></Basket>
        <Title title='Votre panier'></Title>
        <div className='text-align-center'> Votre panier est vide !</div>
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
      {order.order_number && (
        <div className='nickname mx-auto w-30-percent text-align-center'>
          <p className='m-0'>Merci !</p>
          <p className='mt-2'>
            Votre numéro de commande : {order.order_number}
          </p>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
