import React, { useState } from 'react';

import SliderContent from './components/SliderContent';
import arrowLeft from './../../../static/icons/arrow_left.png';
import arrowRight from './../../../static/icons/arrow_right.png';

const Slider = ({ products, title }) => {
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
    <div>
      <div className='bg-title my-auto h-30 mt-10 mb-10 pt-2 width-title'>
        <h2 className='nickname text-align-center text-white'> {title}</h2>
      </div>
      <div className='flex justify-center align-center h-40-vh'>
        <img
          className='cursor-pointer max-height-80 mr-20'
          src={arrowLeft}
          onClick={() => handleSlide('next')}
        ></img>
        <div
          className='w-60 h-full r-30'
          style={{
            backgroundImage: `url(/static/images/${products[count].product_bg})`,
            backgroundSize: 'cover'
          }}
        >
          <SliderContent products={products} count={count} />
        </div>
        <img
          className='cursor-pointer max-height-80 ml-20'
          src={arrowRight}
          onClick={() => handleSlide()}
        ></img>
      </div>
    </div>
  );
};
export default Slider;
