'use strict';

var config = require('../helpers/config');
// var jwt = require("jsonwebtoken");
// var crypt = require("../helpers/crypt");
const db = require('../helpers/db');

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
};

function createProduct(body, callback) {
  db.createProduct(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully created product.',
        product: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'The product creation failed.'
      });
    }
  );
}

// function getAllProducts(callback) {
//   console.log('on est dans service');

//   const sqlQuery = `SELECT * FROM products`;

//   connection.query(sqlQuery, function(err, data, fields) {
//     console.log('onest dans connection query');
//     if (err) {
//       console.log('error');
//       return callback({
//         success: false,
//         message: 'Cannot get list of products.'
//       });
//     }

//     return callback({
//       success: true,
//       message: 'Successfully got list of products.',
//       products: data
//     });
//   });
// }

function getAllProducts(callback) {
  db.getAllProducts(
    function(res) {
      return callback({
        success: true,
        message: 'Successfully got list of products.',
        products: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot get list of products.'
      });
    }
  );
}

function getProduct(body, callback) {
  db.getProduct(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully get product',
        product: res
      });
    },
    function(zeroResult) {
      return callback({
        success: false,
        message: zeroResult
      });
    }
  );
}

function updateProduct(body, callback) {
  db.updateProduct(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully updated product',
        product: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot update product.'
      });
    }
  );
}

function deleteProduct(body, callback) {
  db.deleteProduct(
    body,
    function(res) {
      return callback({
        success: true,
        message: 'Successfully deleted product',
        product: res
      });
    },
    function(err) {
      return callback({
        success: false,
        message: 'Cannot delete product.'
      });
    }
  );
}
