import React from 'react';
import HandleQuantity from './components/HandleQuantity';

const AddButton = ({ currentBeer }) => {
  return (
    <div className='mt-8 flex justify-center align-center flex-col'>
      <h2 className='nickname font-light f2 m-0'>Ajouter au panier :</h2>
      <div>
        <button className='addButton'>
          <HandleQuantity currentBeer={currentBeer}></HandleQuantity>
        </button>
        <div className='buttonShadow'></div>
      </div>
    </div>
  );
};

export default AddButton;
