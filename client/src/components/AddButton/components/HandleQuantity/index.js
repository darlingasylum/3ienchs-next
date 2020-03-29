import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddToBasket, DeleteFromBasket } from '../../../../../redux/actions';

const basketSelector = state => state.basket.articles;

const useStore = () => {
  const dispatch = useDispatch();
  const add = product => {
    dispatch(AddToBasket(product));
  };
  const remove = product => {
    dispatch(DeleteFromBasket(product));
  };

  return { add, remove };
};

//Handle Quantity is called either by AddButton (in Slider) either by Card (in BasketPage)
const HandleQuantity = ({ currentBeer, withColoredText }) => {
  const articles = useSelector(basketSelector);
  const { add, remove } = useStore();

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

  return (
    <>
      <button
        onClick={() => remove(currentBeer)}
        className='border-none cursor-pointer f10 bg-transparent not-outlined'
        style={{
          color: withColoredText && `${currentBeer.text_color}`
        }}
      >
        -
      </button>
      <div
        className='w-15 text-align-center f10'
        style={{
          color: withColoredText && `${currentBeer.text_color}`
        }}
      >
        {beerQuantity()}
      </div>
      <button
        onClick={() => add(currentBeer)}
        className='border-none cursor-pointer f10 bg-transparent not-outlined'
        style={{
          color: withColoredText && `${currentBeer.text_color}`
        }}
      >
        +
      </button>
    </>
  );
};

export default HandleQuantity;
