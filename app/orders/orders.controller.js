const express = require('express');
const router = express.Router();
const ordersService = require('./orders.service');
var passport = require('passport');

// routes
router.post('/makeOrder', makeOrder);
router.post('/checkOrderNumber/:orderNumber', checkOrderNumber);
router.get('/getOrderNumber/:id', getOrderNumber);
// router.get('/getAllProducts', getAllProducts);
// router.get('/getProduct', getProduct);
// router.patch('/update', updateProduct);
// router.delete('/delete', deleteProduct);

module.exports = router;

function makeOrder(req, res) {
  console.log('depuis controller -->', req.body);
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

// function getFeatProducts(req, res) {
//   productsService.getFeatProducts(result => {
//     result.success
//       ? res.status(201).json(result)
//       : res.status(401).json(result);
//   });
// }

// function getAllProducts(req, res) {
//   productsService.getAllProducts(result => {
//     result.success
//       ? res.status(201).json(result)
//       : res.status(401).json(result);
//   });
// }

// function getProduct(req, res) {
//   productsService.getProduct(req.body, result => {
//     result.success
//       ? res.status(201).json(result)
//       : res.status(401).json(result);
//   });
// }

// function updateProduct(req, res) {
//   productsService.updateProduct(req.body, result => {
//     result.success
//       ? res.status(201).json(result)
//       : res.status(401).json(result);
//   });
// }

// function deleteProduct(req, res) {
//   productsService.deleteProduct(req.body, result => {
//     result.success
//       ? res.status(201).json(result)
//       : res.status(401).json(result);
//   });
// }
