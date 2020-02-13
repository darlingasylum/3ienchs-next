import React, { useState } from 'react';

import SliderContent from './components/SliderContent';
import arrowLeft from './../../../static/icons/arrow_left.png';
import arrowRight from './../../../static/icons/arrow_right.png';
import Prices from './components/Prices';
import Title from './../Title';
import Button from './../Button';
import AddButton from './../AddButton';

const Slider = ({ products, title, buttonsType, id, withPrices }) => {
  const [count, setCounter] = useState(0);

  const handleSlide = next => {
    const productsListLength = products.length;
    if (next) {
      count + 1 <= productsListLength - 1
        ? setCounter(prevCount => prevCount + 1)
        : setCounter(0);
    } else {
      count - 1 >= 0
        ? setCounter(prevCount => prevCount - 1)
        : setCounter(productsListLength - 1);
    }
  };

  return (
    <div id={id}>
      <Title title={title}></Title>
      <div className='flex justify-center align-center h-40-vh'>
        {products.length > 1 && (
          <img
            className='cursor-pointer max-height-80 mr-20'
            src={arrowLeft}
            onClick={() => handleSlide('next')}
          ></img>
        )}
        <div
          className='w-60-percent h-full'
          style={{
            backgroundImage: `url(/static/images/${products[count].product_bg})`,
            backgroundSize: 'cover'
          }}
        >
          {withPrices && <Prices />}
          <SliderContent
            products={products}
            count={count}
            withPrices={withPrices}
          />
        </div>
        {products.length > 1 && (
          <img
            className='cursor-pointer max-height-80 ml-20'
            src={arrowRight}
            onClick={() => handleSlide()}
          ></img>
        )}
      </div>
      {buttonsType === 'buyingMode' && (
        <div className='flex justify-center'>
          <Button
            isExternal={true}
            to='https://www.findabottle.fr/brasserie/brasserie-3ienchs/'
          >
            livraison
          </Button>
          <Button to='/commander'>à emporter</Button>
        </div>
      )}
      {buttonsType === 'addToBasket' && (
        <AddButton currentBeer={products[count]}></AddButton>
      )}
    </div>
  );
};
export default Slider;
