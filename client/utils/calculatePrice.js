// CALCULATE NUMBER OF ARTICLES IN BASKET
export const countArticles = basket => {
  let count = 0;
  if (basket.length > 0) {
    basket.map(product => (count = count + product.quantity));
  }
  return count;
};

//CALCULATE TOTAL PRICE OF BASKET

export const calculatePrice = clientQty => {
  const priceInf6 = +3;
  const priceBetween6and24 = +2.5;
  const priceAbove24 = +2.3;

  // si moins de 6 bières, elles sont calculées à l'unité
  if (clientQty < 6) {
    const price = +(clientQty * priceInf6).toFixed(2);
    return price;
  } else if (6 <= clientQty < 24) {
    const price = +(clientQty * priceBetween6and24).toFixed(2);
    return price;
  } else {
    const price = +(clientQty * priceAbove24).toFixed(2);
    return price;
  }
};
