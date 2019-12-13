import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddPanier, DeleteFromPanier } from './../../../redux/actions';
import AddRemove from './components/AddRemove';

const basketSelector = state => state.basket.articles;

const useCounter = () => {
  const dispatch = useDispatch();
  const add = product => {
    dispatch(AddPanier(product));
  };
  const remove = product => {
    dispatch(DeleteFromPanier(product));
  };

  return { add, remove };
};

const AddButton = ({ currentBeer }) => {
  const articles = useSelector(basketSelector);
  const { add, remove } = useCounter();

  const beerQuantity = () => {
    let isBasketEmpty = articles.length === 0 ? true : false;
    if (!isBasketEmpty) {
      //check if currentbeer is in basket
      const isCurrentBeerInBasket = articles.find(
        e => e.product_id === currentBeer.product_id
      );
      // if so, check how many beers are already in basket
      if (isCurrentBeerInBasket) {
        let beerIndex = articles
          .map(function(e) {
            return e.product_id;
          })
          .indexOf(currentBeer.product_id);
        return articles[beerIndex].quantity;
      }
      return '0';
    } else return '0';
  };

  // product = { id: id, name: name, etc };

  return (
    <div className='mt-8'>
      <h2 className='nickname font-light f2 m-0 text-align-center'>
        Ajouter au panier :
      </h2>
      <div className='h-18 w-60 nickname flex justify-center align-center mb-16 bg-button mx-auto'>
        <AddRemove currentBeer={currentBeer}></AddRemove>
      </div>
    </div>
  );
};

export default AddButton;
