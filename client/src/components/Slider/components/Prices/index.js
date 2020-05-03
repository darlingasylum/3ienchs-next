import React from 'react';

const Prices = ({ hiddenMobile }) => {
  return (
    <div
      className={`sliderPrices ${
        hiddenMobile ? 'hiddenMobile' : 'hiddenDesktop'
      }`}
    >
      <span className='block'>3€ l'unité</span>
      <span className='block'>2,5€ à partir de 6</span>
      <span className='block'>2,3€ à partir de 24</span>
    </div>
  );
};

export default Prices;
