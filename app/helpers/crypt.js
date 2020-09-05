'use strict';
var bcrypt = require('bcryptjs');

var crypt = {};

crypt.createHash = function (data, successCallback, failureCallback) {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      failureCallback(err);
      return;
    }
    bcrypt.hash(data, salt, function (err, hash) {
      if (err) {
        failureCallback(err);
        return;
      }
      successCallback(hash);
    });
  });
};

crypt.compareHash = function (
  data,
  encrypted,
  successCallback,
  failureCallback
) {
  bcrypt.compare(data, encrypted, function (err, isMatch) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(err, isMatch);
  });
};

module.exports = crypt;
