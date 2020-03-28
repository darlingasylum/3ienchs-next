import { actionTypes } from './../actions';

const initialState = {
  articles: [
    // {
    //   quantity: 3,
    //   id: 1,
    // }
  ]
};

// REDUCERS
const basket = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDTOBASKET:
      // check if beer is already in basket
      let beerIndex = state.articles
        .map(function(e) {
          return e.product_id;
        })
        .indexOf(action.payload.product_id);

      let articles = state.articles.slice();

      if (beerIndex > -1) {
        articles[beerIndex].quantity = articles[beerIndex].quantity + 1;
      } else {
        let completeProduct = {
          ...action.payload,
          quantity: 1
        };
        articles.push(completeProduct);
      }

      return {
        ...state,
        articles
      };

    case actionTypes.REMOVEFROMBASKET:
      // check if beer is already in basket
      beerIndex = state.articles
        .map(function(e) {
          return e.product_id;
        })
        .indexOf(action.payload.product_id);

      articles = state.articles.slice();

      if (beerIndex > -1) {
        if (articles[beerIndex].quantity === 1) {
          articles.splice(beerIndex, 1);
        } else {
          articles[beerIndex].quantity = articles[beerIndex].quantity - 1;
        }
      }

      return {
        ...state,
        articles
      };

    case actionTypes.RESET:
      return initialState;

    default:
      return state;
  }
};

export default basket;
