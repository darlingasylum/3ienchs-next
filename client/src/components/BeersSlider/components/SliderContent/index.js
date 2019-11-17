import React from 'react';

const SliderContent = ({ products, count }) => {
  return (
    <div className='h-full flex '>
      <div className='w-30 ml-8-percent flex flex-col items-start justify-center'>
        <h3
          className='nickname f0 m-0'
          style={{
            color: `${products[count].title_color}`
          }}
        >
          {products[count].product_name}
        </h3>
        <h4
          className='nickname m-0'
          style={{
            color: `${products[count].text_color}`
          }}
        >
          {products[count].product_type}
        </h4>
        <h5
          className='nickname m-0'
          style={{
            color: `${products[count].text_color}`
          }}
        >
          {products[count].product_proof}%
        </h5>
      </div>
      <div className='w-30 flex flex flex-col items-start justify-center'>
        <p
          className='nickname'
          style={{
            color: `${products[count].text_color}`
          }}
        >
          {products[count].product_descr}
        </p>
      </div>
      <div className='w-30 h-130-percent'>
        <img
          className='h-full relative l-30-percent b-25-percent'
          src={`/static/images/${products[count].product_img}`}
        ></img>
      </div>
    </div>
  );
};
export default SliderContent;
