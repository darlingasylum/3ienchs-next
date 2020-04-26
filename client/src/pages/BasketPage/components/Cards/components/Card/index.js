import React from 'react';

import HandleQuantity from '../../../../../../components/AddButton/components/HandleQuantity';

const Card = ({ product, unitPrice, isTotal, numberOfArticles }) => {
  let priceArticles;
  let color;

  if (isTotal) {
    color = 'white';
    priceArticles = (numberOfArticles * unitPrice).toFixed(1);
  } else {
    priceArticles = (product.quantity * unitPrice).toFixed(1);
    color = `${product.text_color}`;
  }

  return (
    <div
      className={`nickname card-responsive ${isTotal && `total-card`}`}
      style={{
        backgroundImage: isTotal
          ? `url(/static/images/jonsnout_bg.png)`
          : `url(/static/images/${product.product_bg})`,
      }}
    >
      <div className='title-beer-responsive flex justify-center align-center'>
        {!isTotal && (
          <img
            className='image-responsive'
            src={`/static/images/${product.product_img}`}
          ></img>
        )}
        <div
          className={isTotal ? 'f1 w-half' : 'f2 w-half'}
          style={{
            color: color,
          }}
        >
          {isTotal ? 'Total' : product.product_name}
        </div>
      </div>

      <div className='counter'>
        {!isTotal && (
          <HandleQuantity
            currentBeer={product}
            withColoredText
          ></HandleQuantity>
        )}
      </div>
      <div className='price-container'>
        <div className=' white-line'></div>
        <div
          className='price'
          style={{
            color: color,
          }}
        >
          {priceArticles}€
        </div>
      </div>
    </div>
  );
};

export default Card;
