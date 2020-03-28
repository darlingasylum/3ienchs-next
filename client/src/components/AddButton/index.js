import React from 'react';
import HandleQuantity from './components/HandleQuantity';

const AddButton = ({ currentBeer }) => {
  return (
    <div className='mt-8'>
      <h2 className='nickname font-light f2 m-0 text-align-center'>
        Ajouter au panier :
      </h2>
      <div className='h-18 w-60 nickname flex justify-center align-center mb-16 bg-button mx-auto'>
        <HandleQuantity currentBeer={currentBeer}></HandleQuantity>
      </div>
    </div>
  );
};

export default AddButton;
