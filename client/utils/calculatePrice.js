//CALCULATE TOTAL PRICE OF BASKET
const priceWithoutModulo = (clientQty, packQty, packPrice) => {
  const price = (clientQty / packQty) * packPrice;
  return +price.toFixed(2);
};
const priceWithModulo = (clientQty, packQty, packPrice, unitePrice) => {
  const remainder = clientQty % packQty;
  const price =
    ((clientQty - remainder) / packQty) * packPrice + remainder * unitePrice;
  return +price.toFixed(2);
};

export const calculatePrice = (clientQty, unitePrice) => {
  const pack6Price = +15;
  const pack24Price = +55.2;

  // si moins de 6 bières, elles sont calculées à l'unité
  if (clientQty < 6) {
    const price = +(clientQty * unitePrice).toFixed(2);
    return price;
  } else {
    //si on a entre 6 et 24 bières, on détermine si c'est un multiple de 6 ou non et on applique la fonction correspondante
    if (clientQty < 24) {
      if (clientQty % 6 === 0) {
        const price = priceWithoutModulo(clientQty, 6, pack6Price);
        return price;
      } else {
        const price = priceWithModulo(clientQty, 6, pack6Price, unitePrice);
        return price;
      }
      // si on a plus de 24bières on fait la même chose avec les multiples de 24
    } else {
      //si multiple de 24
      const remainderFrom24 = clientQty % 24;
      const clientQtyLessremainder = clientQty - remainderFrom24;
      if (remainderFrom24 === 0) {
        const price = priceWithoutModulo(clientQty, 24, pack24Price);
        return price;
        // si pas multiple de 24 et que le reste est supérieur à 6 (= on doit appliquer les promo sur le reste)
      } else if (remainderFrom24 > 5) {
        if (remainderFrom24 % 6 === 0) {
          const price =
            priceWithoutModulo(clientQtyLessremainder, 24, pack24Price) +
            priceWithoutModulo(remainderFrom24, 6, pack6Price);

          return price;
        } else {
          const price =
            priceWithoutModulo(clientQtyLessremainder, 24, pack24Price) +
            priceWithModulo(remainderFrom24, 6, pack6Price, unitePrice);

          return price;
        }
        //si pas multiple de 24 et que le reste est inférieur à 6
      } else {
        const price = priceWithModulo(clientQty, 24, pack24Price, unitePrice);
        return price;
      }
    }
  }
  console.log('price -->', price);
};
