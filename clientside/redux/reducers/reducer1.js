import { actionTypes } from "./../actions";

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
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
const reducer1 = (state = exampleInitialState, action) => {
  switch (action.type) {
    // case actionTypes.TICK:
    //   return Object.assign({}, state, {
    //     lastUpdate: action.ts,
    //     light: !!action.light
    //   });
    case actionTypes.INCREMENT:
      console.log("depuis reducer1");
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case actionTypes.DECREMENT:
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

export default reducer1;
