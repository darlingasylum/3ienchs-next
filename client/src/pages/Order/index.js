import React from 'react';
import Slider from './../../components/Slider';

import bottles from './../../../static/icons/bottles.png';

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
        <div className=' w-25 pl-15 flex flex-col align-center'>
          <img src={bottles} alt='logo_iench' className='max-width-50 w-25' />
          <div className='nickname'>
            <span>0</span>
            <span>=</span>
            <span>0</span>
            <span>€</span>
          </div>
          <div className='nickname text-white bg-purple-dark br-8 pl-1 pr-1'>
            Voir le panier
          </div>
        </div>
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
