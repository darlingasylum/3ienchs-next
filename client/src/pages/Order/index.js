import React from 'react';
import Slider from './../../components/Slider';
import Basket from './components/Basket';

const Order = props => {
  return (
    <div className='hero mt-10 w-full h-100-vh'>
      <Basket />
      <div className='w-full pt-10 pb-10 flex flex-row items-center justify-between'>
        {/* <div className='w-25-percent' /> */}
        <div className='w-full'>
          <h1 className='text-pink-iench nickname font-light f1 m-0 text-align-center'>
            Vente à emporter
          </h1>
          <h2 className='nickname font-light f1 m-0 text-align-center'>
            Les mercredis et vendredis
          </h2>
          <h2 className='nickname font-light f1 m-0 text-align-center'>
            de 17h à 20h
          </h2>
        </div>
      </div>
      <Slider
        products={props.products.dogsProducts}
        title='Nos bières'
        buttonsType='addToBasket'
        withPrices
      ></Slider>
      <Slider
        products={props.products.featProducts}
        title='Featuring'
        buttonsType='addToBasket'
        withPrices
      ></Slider>
    </div>
  );
};

export default Order;
