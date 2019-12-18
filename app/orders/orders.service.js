'use strict';

var config = require('../helpers/config');
// var jwt = require("jsonwebtoken");
// var crypt = require("../helpers/crypt");
const db = require('../helpers/db');

module.exports = {
  makeOrder,
  checkOrderNumber,
  getOrderNumber
  //   getAllProducts,
  //   getProduct,
  //   updateProduct,
  //   deleteProduct
};

function makeOrder(body, callback) {
  db.makeOrder(
    body,
    function(orderId) {
      return callback({
        success: true,
        message: 'Successfully ordered.',
        orderId: orderId
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'The order failed.'
      });
    }
  );
}

function checkOrderNumber(number, callback) {
  db.checkOrderNumber(
    number,
    function() {
      return callback({
        success: true,
        message: 'this number order exists'
      });
    },
    function() {
      return callback({
        success: false,
        message: "this number order doesn't exists"
      });
    }
  );
}

function getOrderNumber(id, callback) {
  db.getOrderNumber(
    id,
    function(result) {
      return callback({
        success: true,
        message: 'Successfully got order number',
        result: result
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot get order number.'
      });
    }
  );
}

// function getFeatProducts(callback) {
//   db.getFeatProducts(
//     function(res) {
//       return callback({
//         success: true,
//         message: 'Successfully got list of featured products.',
//         products: res
//       });
//     },
//     function(err) {
//       return callback({
//         success: false,
//         message: 'Cannot get list of featured products.'
//       });
//     }
//   );
// }

// function getAllProducts(callback) {
//   db.getAllProducts(
//     function(res) {
//       return callback({
//         success: true,
//         message: 'Successfully got list of all products.',
//         products: res
//       });
//     },
//     function(err) {
//       return callback({
//         success: false,
//         message: 'Cannot get list of all products.'
//       });
//     }
//   );
// }

// function getProduct(body, callback) {
//   db.getProduct(
//     body,
//     function(res) {
//       return callback({
//         success: true,
//         message: 'Successfully get product',
//         product: res
//       });
//     },
//     function(zeroResult) {
//       return callback({
//         success: false,
//         message: zeroResult
//       });
//     }
//   );
// }

// function updateProduct(body, callback) {
//   db.updateProduct(
//     body,
//     function(res) {
//       return callback({
//         success: true,
//         message: 'Successfully updated product',
//         product: res
//       });
//     },
//     function(err) {
//       return callback({
//         success: false,
//         message: 'Cannot update product.'
//       });
//     }
//   );
// }

// function deleteProduct(body, callback) {
//   db.deleteProduct(
//     body,
//     function(res) {
//       return callback({
//         success: true,
//         message: 'Successfully deleted product',
//         product: res
//       });
//     },
//     function(err) {
//       return callback({
//         success: false,
//         message: 'Cannot delete product.'
//       });
//     }
//   );
// }
