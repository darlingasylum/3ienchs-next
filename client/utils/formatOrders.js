// format list of all orders for admin dashboard
// sort between over and actual orders
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

// format order when a mail is send to user and admin
export const formatOrder = (order) => {
  const products = [];
  order.map((item) =>
    products.push({ qty: item.product_qty, name: item.product_name })
  );
  const formattedOrder = {
    email: order[0].email,
    id: order[0].id,
    number: order[0].number,
    pickupdate: order[0].pickupdate,
    price: order[0].price,
    products: products,
  };

  return formattedOrder;
};
