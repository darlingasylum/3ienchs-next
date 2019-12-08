import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddPanier, DeleteFromPanier } from './../../../redux/actions';

const countSelector = state => state.basket.articles;

const useCounter = () => {
  const dispatch = useDispatch();
  const add = id => {
    dispatch(AddPanier({ id: id }));
  };
  const remove = () => {
    dispatch(DeleteFromPanier());
  };

  return { add, remove };
};

const AddButton = ({ products, count }) => {
  const articles = useSelector(countSelector);
  const { add, remove } = useCounter();

  const currentBeerId = products[count].product_id;

  const beerQuantity = () => {
    let isBasketEmpty = articles.length === 0 ? true : false;
    if (!isBasketEmpty) {
      //check if currentbeer is in basket
      const isCurrentBeerInBasket = articles.find(e => e.id === currentBeerId);
      // if so, check how many beers are already in basket
      if (isCurrentBeerInBasket) {
        let beerIndex = articles
          .map(function(e) {
            return e.id;
          })
          .indexOf(currentBeerId);
        return articles[beerIndex].quantity;
      }
      return '0';
    } else return '0';
  };

  return (
    <div className='h-18 w-60 nickname flex justify-center align-center m-8 bg-button my-auto'>
      <button
        onClick={() => add(currentBeerId)}
        className='border-none cursor-pointer f10 bg-transparent not-outlined'
      >
        +
      </button>
      <div className='w-15 text-align-center f10'>{beerQuantity()}</div>
      <button
        onClick={() => remove(currentBeerId)}
        className='border-none cursor-pointer f10 bg-transparent not-outlined'
      >
        {' '}
        -{' '}
      </button>
    </div>
  );
};

export default AddButton;
