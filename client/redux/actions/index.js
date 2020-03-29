export const actionTypes = {
  ADDTOBASKET: 'ADDTOBASKET',
  REMOVEFROMBASKET: 'REMOVEFROMBASKET',
  RESET: 'RESET'
};

export const AddToBasket = articlesToAdd => {
  return {
    type: actionTypes.ADDTOBASKET,
    payload: articlesToAdd
  };
};

export const DeleteFromBasket = articlesToDelete => {
  return {
    type: actionTypes.REMOVEFROMBASKET,
    payload: articlesToDelete
  };
};

export const ResetBasket = () => {
  return {
    type: actionTypes.RESET
  };
};
