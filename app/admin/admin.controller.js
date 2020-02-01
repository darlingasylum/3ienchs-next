const express = require('express');
const router = express.Router();
const adminService = require('./admin.service');

router.get('/allusers', getAllUsers);

module.exports = router;

function getAllUsers(req, res) {
  adminService.getAllUsers(result => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}
