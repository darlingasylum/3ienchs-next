import { actionTypes } from './../actions';

const exampleInitialState = {
  articles: [
    // {
    //   quantity: 3,
    //   id: 1,
    // }
  ]
};

// function App(state = {}, action) {
//   switch (action.type) {
//     case "INITIALIZE":
//       return {
//         appName: action.label,
//         initialize: true
//       };
//     default:
//       return state;
//   }
// }

// REDUCERS
const basket = (state = exampleInitialState, action) => {
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

    default:
      return state;
  }
};

export default basket;
