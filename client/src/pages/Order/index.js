import React from 'react';
import Slider from './../../components/Slider';
import Basket from './components/Basket';

const Order = props => {
  return (
    <div className='hero mt-10 w-full h-100-vh'>
      <div className='w-full pt-10 flex flex-row items-center justify-between'>
        <div className='w-25' />
        <div className='w-half'>
          <h1 className='text-pink-iench nickname font-light f1 m-0 text-align-center'>
            Vente à emporter
          </h1>
          <h2 className='nickname font-light f2 m-0 text-align-center'>
            Les mercredi et vendredi de 17h à 20h
          </h2>
        </div>
        <Basket />
      </div>
      <Slider
        products={props.products.dogsProducts}
        title='Nos bières'
      ></Slider>
      <Slider products={props.products.featProducts} title='Featuring'></Slider>
    </div>
  );
};

export default Order;
