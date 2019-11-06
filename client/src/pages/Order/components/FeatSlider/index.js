import React from 'react';

const FeatSlider = props => {
  const { products } = props;
  return (
    <div>
      <h2 className='nickname'>Featurings</h2>
      {products.featProducts.map(beer => (
        <li key={beer.product_id}>{beer.product_name} </li>
      ))}
    </div>
  );
};

export default FeatSlider;
