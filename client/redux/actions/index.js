export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  ADDTOBASKET: 'ADDTOBASKET',
  REMOVEFROMBASKET: 'REMOVEFROMBASKET'
};

// ACTIONS
// export const serverRenderClock = () => {
//   return { type: actionTypes.TICK, light: false, ts: Date.now() };
// };
// export const startClock = () => {
//   return { type: actionTypes.TICK, light: true, ts: Date.now() };
// };

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT };
};

export const resetCount = () => {
  return { type: actionTypes.RESET };
};

export const AddPanier = articlesToAdd => {
  return {
    type: actionTypes.ADDTOBASKET,
    payload: articlesToAdd
  };
};

export const DeleteFromPanier = articlesToDelete => {
  return {
    type: actionTypes.REMOVEFROMBASKET,
    payload: articlesToDelete
  };
};
