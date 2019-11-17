import React, { useState } from 'react';

import arrowLeft from './../../../../../static/icons/arrow_left.png';
import arrowRight from './../../../../../static/icons/arrow_right.png';

const BeersSlider = props => {
  const { products } = props;
  const [count, setCounter] = useState(0);

  const handleSlide = next => {
    const productsListLength = products.dogsProducts.length;
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
        <h2 className='nickname text-align-center text-white'>Nos bières</h2>
      </div>
      <div className='flex justify-center align-center h-40-vh'>
        <img
          className='cursor-pointer max-height-80 mr-20'
          src={arrowLeft}
          onClick={() => handleSlide('next')}
        ></img>
        <div
          className='w-60 h-full r-30 flex'
          style={{
            backgroundImage: `url(/static/images/${products.dogsProducts[count].product_bg})`,
            backgroundSize: 'cover'
          }}
        >
          <div className='w-30'>
            <h3
              className='nickname ml-16-percent f0'
              style={{
                color: `${products.dogsProducts[count].title_color}`
              }}
            >
              {products.dogsProducts[count].product_name}
            </h3>
          </div>
          <div className='w-30'>
            <p
              className='nickname'
              style={{
                color: `${products.dogsProducts[count].text_color}`
              }}
            >
              {products.dogsProducts[count].product_descr}
            </p>
          </div>
          <div className='w-30'>
            <img
              className='h-130-percent relative l-70-percent b-40-percent'
              src={`/static/images/${products.dogsProducts[count].product_img}`}
            ></img>
          </div>
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
export default BeersSlider;
