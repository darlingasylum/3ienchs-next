import React, { useState } from 'react';

import arrowLeft from './../../../../../static/icons/arrow_left.png';
import arrowRight from './../../../../../static/icons/arrow_right.png';

const BeersSlider = props => {
  const { products } = props;
  const [count, setCounter] = useState(0);
  console.log(products.dogsProducts);
  console.log(count);

  const handleSlide = (index, direction) => {
    setCounter(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2 className='nickname'>Nos bières</h2>
      {/* {products.dogsProducts.map(beer => (
        <li key={beer.product_id}>{beer.product_name} </li>
      ))} */}
      <img
        className='cursor-pointer'
        src={arrowLeft}
        onClick={handleSlide}
      ></img>
      <img
        className='h-40'
        src={`/static/images/${products.dogsProducts[count].product_img}`}
      ></img>
      <img
        className='cursor-pointer'
        src={arrowRight}
        onClick={handleSlide}
      ></img>
    </div>
  );
};
export default BeersSlider;
