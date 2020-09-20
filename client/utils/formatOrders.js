export const formatOrders = (orders) => {
  let formattedOrders = [];
  orders.forEach((order, i) => {
    // if the is already an order with the same id in formattedOrders, then we want to push product details in this order
    if (orders[i - 1] && order.id === orders[i - 1].id) {
      formattedOrders[formattedOrders.length - 1].details.push({
        product_id: order.product_id,
        product_qty: order.product_qty,
        product_name: order.product_name,
      });
      //otherwise we want to create a new order in formattedOrders
    } else {
      formattedOrders.push({
        id: order.id,
        number: order.number,
        date: order.date,
        pickupdate: order.pickupdate,
        price: order.price,
        over: order.over,
        email: order.email,
        details: [
          {
            product_id: order.product_id,
            product_qty: order.product_qty,
            product_name: order.product_name,
          },
        ],
      });
    }
  });

  let overOrders = [];
  let actualOrders = [];
  formattedOrders.forEach((order) => {
    if (order.over) {
      overOrders.push(order);
    } else {
      actualOrders.push(order);
    }
  });

  return { overOrders, actualOrders };
};
