import React from 'react';

import AddRemove from '../../../../../../components/AddButton/components/AddRemove';

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
      className='flex align-center w-70 h-25 mb-10 w-60-percent my-auto br-10 nickname'
      style={{
        backgroundImage: isTotal
          ? `url(/static/images/jonsnout_bg.png)`
          : `url(/static/images/${product.product_bg})`
      }}
    >
      <div className='w-25-percent flex justify-center align-center'>
        {!isTotal && (
          <img
            className='h-30 mx-8 mb-8'
            src={`/static/images/${product.product_img}`}
          ></img>
        )}
        <div
          className={isTotal ? 'f1' : 'f2'}
          style={{
            color: color
          }}
        >
          {isTotal ? 'Total' : product.product_name}
        </div>
      </div>

      <div className='w-half flex justify-center'>
        {!isTotal && (
          <AddRemove currentBeer={product} withColoredText></AddRemove>
        )}
      </div>
      <div className='w-25-percent flex justify-center'>
        <div className='w-1px h-10 mx-5 bg-white'></div>
        <div
          className='f1'
          style={{
            color: color
          }}
        >
          {priceArticles}€
        </div>
      </div>
    </div>
  );
};

export default Card;
