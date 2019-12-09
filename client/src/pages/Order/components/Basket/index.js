import React from 'react';

import bottles from './../../../../../static/icons/bottles.png';

const Basket = props => {
  return (
    <div className='fixed r-10 t-15 bg-grey-light p-6 br-40 flex flex-col align-center'>
      <img
        src={bottles}
        alt='logo_iench'
        className='max-width-50 w-25-percent'
      />
      <div className='nickname'>
        <span>0</span>
        <span>=</span>
        <span>0</span>
        <span>€</span>
      </div>
      <div className='nickname text-white bg-purple-dark br-8 pl-1 pr-1 cursor-pointer'>
        Voir le panier
      </div>
    </div>
  );
};

export default Basket;
