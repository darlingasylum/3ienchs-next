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
    // case actionTypes.TICK:
    //   return Object.assign({}, state, {
    //     lastUpdate: action.ts,
    //     light: !!action.light
    //   });
    case actionTypes.ADDTOBASKET:
      console.log('depuis basket', action.payload);

      // check if beer is already in basket
      let beerIndex = state.articles
        .map(function(e) {
          return e.id;
        })
        .indexOf(action.payload.id);

      let articles = state.articles.slice();

      if (beerIndex > -1) {
        articles[beerIndex].quantity = articles[beerIndex].quantity + 1;
      } else {
        articles.push({ id: action.payload.id, quantity: 1 });
      }

      return {
        ...state,
        articles
      };
    case actionTypes.REMOVEFROMBASKET:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      });
    default:
      return state;
  }
};

export default basket;
