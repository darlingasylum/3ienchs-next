import React from 'react';

import bottles from './../../../../../static/icons/bottles.png';

const Basket = props => {
  return (
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
  );
};

export default Basket;
