import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { APICall } from './../../../utils/APICall';

import Basket from '../../components/Basket';
import Title from '../../components/Title';
import Cards from './components/Cards';
import Calendar from './../../components/Calendar';
import Button from './../../components/Button';
import Step from './components/Step';
import { calculatePrice, countArticles } from './../../../utils/calculatePrice';
import { ResetBasket } from '../../../redux/actions';

const basketSelector = (state) => state.basket.articles;

const useStore = () => {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(ResetBasket());
  };
  return { reset };
};

const BasketPage = () => {
  let basket = useSelector(basketSelector);
  const { reset } = useStore();

  const [pickupDate, setDate] = useState(new Date());
  const [order, setOrder] = useState({});
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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
      .then((response) => {
        if (!response.success) {
          // if number order doesn't exist in database
          return newOrderNumber;
        } else {
          checkOrderNumber();
        }
      })
      .catch((err) => console.log(err));
    return newOrderNumber;
  };

  // get order information with order id
  const getOrder = (orderId) => {
    APICall(`http://localhost:4000/api/orders/getOrderNumber/${orderId}`)
      .then((res) => {
        setOrder(res.result[0]);
      })
      .then(() => reset())
      .catch((err) => console.log(err));
  };

  const handleValidate = () => {
    const orderNumber = checkOrderNumber();

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailError('adresse e-mail invalide!');
      return;
    }

    const data = {
      order_number: orderNumber,
      order_pickupdate: pickupDate,
      order_price: calculatePrice(countArticles(basket)),
      order_email: email,
      order_over: 0,
      basket: basket,
    };
    const fetch_param = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    };

    APICall('http://localhost:4000/api/orders/makeOrder', fetch_param)
      .then((response) => {
        return response.orderId;
      })
      .then((orderId) => {
        getOrder(orderId);
      })
      .then(window.scrollTo(0, document.body.scrollHeight))
      .catch((err) => console.log(err));
  };

  const getDate = (date) => {
    setDate(date);
  };

  if (basket && basket.length === 0 && !order.order_number) {
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
      {!order.order_number && (
        <div>
          <Basket></Basket>
          <Title title='Votre panier'></Title>
          <Cards products={basket}></Cards>
          <Calendar pickupDate={pickupDate} getDate={getDate} />
          <div className=' my-10 w-full text-align-center'>
            <Step number={2} />
            <label for='email' className='my-8 f2 nickname'>
              Renseignez votre adresse e-mail:
            </label>

            <input
              type='text'
              id='email'
              name='email'
              value={email}
              className='block p-2 w-60 br-8 mx-auto bs-solid bw-2 bc-black'
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {emailError}
          </div>

          <div className=' my-10 w-full flex justify-center'>
            <Step number={3} />
            <p className='my-0 f2 nickname'>
              Vous reglerez la commande <br /> sur place (CB, chèque ou espèces)
            </p>
          </div>

          <Button onClick={handleValidate} withMarginBottom>
            Valider la commande
          </Button>
        </div>
      )}
      {order.order_number && (
        <div className='nickname mx-auto mt-30 w-30-percent text-align-center'>
          <p className='m-0'>
            Merci, votre commande a bien été prise en compte !
          </p>
          <p className='mt-2'>
            Votre numéro de commande : {order.order_number}
          </p>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
