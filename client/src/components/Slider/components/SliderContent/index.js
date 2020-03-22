import React from 'react';

const SliderContent = ({ product, withPrices }) => {
  console.log('product -->', product);
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
            color: `${product.title_color}`
          }}
        >
          {product.product_name}
        </h3>

        {product.featuring === 1 && (
          <h4
            className='nickname mb-8'
            style={{
              color: `${product.text_color}`
            }}
          >
            <span
              style={{
                color: `${product.title_color}`
              }}
            >
              feat {''}
            </span>
            {product.partner}
          </h4>
        )}

        <h4
          className='nickname m-0'
          style={{
            color: `${product.text_color}`
          }}
        >
          {product.product_type}
        </h4>
        {product.product_proof && (
          <h5
            className='nickname m-0 display-none-md'
            style={{
              color: `${product.text_color}`
            }}
          >
            {product.product_proof}%
          </h5>
        )}
      </div>
      <div className='text-align-center-md pl-5'>
        <p
          className='nickname'
          style={{
            color: `${product.text_color}`
          }}
        >
          {product.product_descr}
        </p>
      </div>
      {product.product_img && (
        <div className='min-height-150-px slider-beer-size relative'>
          <img
            className='absolute bottom-9 l-0'
            src={`/static/images/${product.product_img}`}
          ></img>
        </div>
      )}
    </div>
  );
};
export default SliderContent;
