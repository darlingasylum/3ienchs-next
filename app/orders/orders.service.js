'use strict';

var config = require('../helpers/config');
// var jwt = require("jsonwebtoken");
// var crypt = require("../helpers/crypt");
const db = require('../helpers/db');

module.exports = {
  makeOrder,
  checkOrderNumber,
  getOrderNumber,
  getAllOrders,
  getOrderById,
  updateStatus,
  updateOrder,
  deleteOrder,
};

function makeOrder(body, callback) {
  db.makeOrder(
    body,
    function (orderId) {
      return callback({
        success: true,
        message: 'Successfully ordered.',
        orderId: orderId,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: 'The order failed.',
      });
    }
  );
}

function checkOrderNumber(number, callback) {
  db.checkOrderNumber(
    number,
    function () {
      return callback({
        success: true,
        message: 'this number order exists',
      });
    },
    function () {
      return callback({
        success: false,
        message: "this number order doesn't exists",
      });
    }
  );
}

function getOrderNumber(id, callback) {
  db.getOrderNumber(
    id,
    function (result) {
      return callback({
        success: true,
        message: 'Successfully got order number',
        result: result,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: 'Cannot get order number.',
      });
    }
  );
}

function getAllOrders(callback) {
  db.getAllOrders(
    function (res) {
      return callback({
        success: true,
        message: 'Successfully got list of all orders.',
        orders: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: 'Cannot get list of all orders.',
      });
    }
  );
}

function getOrderById(OrderId, callback) {
  db.getOrderById(
    OrderId,
    function (res) {
      return callback({
        success: true,
        message: 'Successfully got details of order.',
        order: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: 'Cannot get details of order.',
      });
    }
  );
}

function updateStatus(id, callback) {
  db.updateStatus(
    id,
    function (res) {
      return callback({
        success: true,
        message: 'Successfully updated order statut to over.',
        orders: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: 'Cannot update order status to over.',
      });
    }
  );
}

function updateOrder(id, callback) {
  db.updateOrder(
    body,
    function (res) {
      return callback({
        success: true,
        message: 'Successfully updated product',
        order: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: 'Cannot update product.',
      });
    }
  );
}

function deleteOrder(id, callback) {
  db.deleteOrder(
    id,
    function (res) {
      return callback({
        success: true,
        message: 'Successfully deleted order',
        order: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: 'Cannot delete order.',
      });
    }
  );
}
