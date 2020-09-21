import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { APICall } from './../../../utils/APICall';
import { formatOrder } from './../../../utils/formatOrders';
import { ResetBasket } from '../../../redux/actions';
import { calculatePrice, countArticles } from './../../../utils/calculatePrice';

import Basket from '../../components/Basket';
import Title from '../../components/Title';
import Cards from './components/Cards';
import Calendar from './../../components/Calendar';
import Button from './../../components/Button';
import Step from './components/Step';
import DoneOrder from './components/DoneOrder';
import Link from '@/src/components/Link';

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

  // get all order informations with order id
  const getOrder = (orderId) => {
    APICall(`http://localhost:4000/api/orders/getById/${orderId}`)
      .then((res) => {
        setOrder(formatOrder(res.order));
        return formatOrder(res.order);
      })
      .then((params) => sendMails(params))
      .then(() => reset())
      .catch((err) => console.log(err));
  };

  const sendMails = (mailParams) => {
    const { email, number, price, products, pickupdate } = mailParams;
    const date = moment(pickupdate).format('DD/MM/YYYY');

    const dataBuyer = {
      from: 'contact@3ienchs.com',
      to: email,
      subject: 'Votre commande 3ienchs',
      text: `Votre commande n°${number} a bien été validée, pour un total de ${price}€. Vous pourrez la récupérer le ${date} entre 17h et 20h. Vous pourrez régler par chèque, espèces, ou carte bancaire. Bienvenue dans la meute !`,
      html: `<h2>Bonjour ! </h2><p> Votre commande n°${number} a bien été validée, pour un total de ${price}€.</p> <p>Vous pourrez la récupérer le <strong> ${date} entre 17h et 20h. </strong><p/> <p> Vous pourrez régler votre commande par chèque, espèces, ou carte bancaire. </p> <br> <p> à très bientôt !</p> <br> <p> Tom et Thib, de l'équipe 3iench</p>`,
    };

    const data3ienchs = {
      from: email,
      to: 'contact@3ienchs.com',
      subject: 'Nouvelle commande !',
      text: `Nouvelle commande n°${number}, pour un total de ${price}€. Date de récupération : ${date} entre 17h et 20h.`,
      html: `<h2>Hello les ienchs! </h2><p> Une nouvelle commande vien d'être passée ! Voici les détails : </p> <br> <p>N° commande : ${number} </p> <p> Prix total : ${price}€ </p> <p> Date de récupération à la brasserie : <strong> ${date} entre 17h et 20h.</strong> </p> <br> <p> Toutes les infos sont comme d'habitude disponibles sur le back-office. </p> <br> <p> Wouf !</p> `,
    };

    const fetch_param_buyer = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(dataBuyer),
    };

    const fetch_param_3ienchs = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data3ienchs),
    };

    APICall(
      'http://localhost:4000/api/emailer/',
      fetch_param_buyer
    ).catch((err) => console.log(err));

    APICall(
      'http://localhost:4000/api/emailer/',
      fetch_param_3ienchs
    ).catch((err) => console.log(err));
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

  if (basket && basket.length === 0 && !order.number) {
    return (
      <div className='emptyBasket'>
        <Basket></Basket>
        <Title title='Votre panier'></Title>
        <p> Votre panier est vide !</p>

        <div className='display-none-above-md'>
          <Button to='/commander'>Retour aux bières</Button>
        </div>
      </div>
    );
  }

  return (
    <div className='hero mt-10 w-full'>
      {!order.number && (
        <div>
          <Basket></Basket>
          <Title title='Votre panier'></Title>
          <Cards products={basket}></Cards>
          <div className='orderSteps'>
            <Calendar pickupDate={pickupDate} getDate={getDate} />
            <div className=' my-10 w-full text-align-center'>
              <div className='stepsTitleWrapper'>
                <Step number={2} />
                <label htmlFor='email' className='stepsTitle'>
                  Renseignez votre adresse e-mail
                </label>
              </div>
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

            <div className='stepsTitleWrapper'>
              <Step number={3} />
              <p className='stepsTitle'>
                Vous reglerez la commande <br /> sur place (CB, chèque ou
                espèces)
              </p>
            </div>

            <Button
              onClick={handleValidate}
              withMarginBottom
              smallFont
              withHover
            >
              Valider la commande
            </Button>
          </div>
        </div>
      )}
      {order.number && <DoneOrder orderNumber={order.number} />}
    </div>
  );
};

export default BasketPage;
