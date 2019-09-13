const express = require('express');
const router = express.Router();
const productsService = require('./products.service');
// var passport = require('passport');
// var requireAuth = passport.authenticate('jwt', { session: false });

// routes
// router.post('/create', requireAuth, createProduct);
router.get('/getAll', getAllProducts);
router.get('/getProduct', getProduct);
router.patch('/update', updateProduct);
// router.patch("/delete", deleteProduct);

module.exports = router;

function createProduct(req, res) {
  productsService.createProduct(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function getAllProducts(req, res) {
  productsService.getAllProducts(result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function getProduct(req, res) {
  productsService.getProduct(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function updateProduct(req, res) {
  userService.updateProduct(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}
