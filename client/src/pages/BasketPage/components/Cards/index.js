import React from 'react';
import Card from './components/Card';
import { calculatePrice, countArticles } from '@/utils/calculatePrice';

const Cards = ({ products }) => {
  const numberOfArticles = countArticles(products);
  const totalPrice = calculatePrice(numberOfArticles);

  const unitPrice = totalPrice / numberOfArticles;

  const cards = (basket) => {
    if (basket.length > 0) {
      return basket.map((product) => (
        <Card
          product={product}
          unitPrice={unitPrice}
          key={product.product_id}
        ></Card>
      ));
    }
  };

  return (
    <div>
      {cards(products)}
      <div className='mt-15 mb-15'>
        <Card
          isTotal
          unitPrice={unitPrice}
          numberOfArticles={numberOfArticles}
        ></Card>
      </div>
    </div>
  );
};

export default Cards;
