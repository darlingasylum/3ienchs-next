import React from 'react';

import AddRemove from '../../../../../../components/AddButton/components/AddRemove';

const BeerCardContent = ({ product, unitPrice }) => {
  console.log('product', product);
  const priceArticles = (product.quantity * unitPrice).toFixed(1);
  const color = `${product.text_color}`;
  return (
   
      <div className='w-25-percent flex justify-center align-center'>
        <img
          className='h-30 mx-8 mb-8'
          src={`/static/images/${product.product_img}`}
        ></img>
        <div
          style={{
            color: color
          }}
        >
          {product.product_name}
        </div>
      </div>

      <div className='w-half flex justify-center'>
        <AddRemove currentBeer={product} withColoredText></AddRemove>
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
   
  );
};

export default Card;
