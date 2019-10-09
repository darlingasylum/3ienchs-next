const express = require('express');
const router = express.Router();
const userService = require('./users.service');
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', { session: false });

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.patch('/type', requireAuth, changeType);

module.exports = router;

function register(req, res) {
  userService.register(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function authenticate(req, res) {
  userService.authenticate(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function changeType(req, res) {
  userService.changeType(req.body, result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}
