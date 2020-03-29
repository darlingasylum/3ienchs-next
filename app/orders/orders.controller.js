const express = require('express');
const router = express.Router();
const ordersService = require('./orders.service');

// routes
router.post('/makeOrder', makeOrder);
router.post('/checkOrderNumber/:orderNumber', checkOrderNumber);
router.get('/getOrderNumber/:id', getOrderNumber);
router.get('/getAll', getAllOrders);
router.patch('/updateOrder/:id', updateOrder);
router.delete('/delete/:id', deleteOrder);

module.exports = router;

function makeOrder(req, res) {
  ordersService.makeOrder(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function checkOrderNumber(req, res) {
  ordersService.checkOrderNumber(req.param.orderNumber, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(201).json(result);
  });
}

function getOrderNumber(req, res) {
  ordersService.getOrderNumber(req.params.id, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(201).json(result);
  });
}

function getAllOrders(req, res) {
  ordersService.getAllOrders(result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function updateOrder(req, res) {
  ordersService.updateOrder(req.params.id, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function deleteOrder(req, res) {
  ordersService.deleteOrder(req.params.id, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}
