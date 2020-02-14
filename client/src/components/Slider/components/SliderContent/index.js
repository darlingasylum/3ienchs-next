import React from 'react';

const SliderContent = ({ products, count, withPrices }) => {
  return (
    <div
      className='w-full h-full flex flex-col-md justify-center items-center px-10 py-10 beer-div '
      style={{
        position: withPrices ? 'relative' : 'static'
      }}
    >
      <div className='flex flex-col justify-center px-5 pr-0-md min-h-50-vh-md'>
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
          className='nickname m-0 display-none-md'
          style={{
            color: `${products[count].text_color}`
          }}
        >
          {products[count].product_proof}%
        </h5>
      </div>
      <div className='text-align-center-md pl-5'>
        <p
          className='nickname'
          style={{
            color: `${products[count].text_color}`
          }}
        >
          {products[count].product_descr}
        </p>
      </div>
      <div className='min-height-150-px min-width-20-md relative'>
        <img
          className='absolute bottom-9 l-0'
          src={`/static/images/${products[count].product_img}`}
        ></img>
      </div>
    </div>
  );
};
export default SliderContent;
