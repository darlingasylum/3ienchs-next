export const actionTypes = {
  ADDTOBASKET: 'ADDTOBASKET',
  REMOVEFROMBASKET: 'REMOVEFROMBASKET',
  RESET: 'RESET'
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

export const ResetBasket = () => {
  return {
    type: actionTypes.RESET
  };
};
