'use strict';
const mysql = require('mysql');
var crypt = require('./crypt');
const config = require('./config');
const db = {};
// Creating a connection object for connecting to mysql database
const connection = mysql.createConnection({
  host: config.database_host,
  user: config.database_user,
  password: config.database_password,
  database: config.database_name,
  socketPath: config.socketPath
});

//Connecting to database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

//USER

db.createUser = function(user, successCallback, failureCallback) {
  var passwordHash;
  crypt.createHash(
    user.password,
    function(res) {
      passwordHash = res;
      connection.query(
        "INSERT INTO `3ienchs-next`.`users` (`lastname`, `firstname`, `email`, `password`) VALUES ('" +
          user.lastname +
          "', '" +
          user.firstname +
          "', '" +
          user.email +
          "', '" +
          passwordHash +
          "');",
        function(err, rows, fields, res) {
          if (err) {
            failureCallback(err);
            return;
          }
          successCallback();
        }
      );
    },
    function(err) {
      failureCallback();
    }
  );
};

db.findUser = function(user, successCallback, failureCallback) {
  var sqlQuery =
    "SELECT * FROM `3ienchs-next`.users WHERE `email` = '" + user.email + "';";
  connection.query(sqlQuery, function(err, rows, fields, res) {
    // console.log(this.sql);
    if (err) {
      failureCallback(err);
      return;
    }
    if (rows.length > 0) {
      successCallback(rows[0]);
    } else {
      failureCallback('User not found.');
    }
  });
};

db.changeUserType = function(type, id, successCallback, failureCallback) {
  const sqlQuery = `UPDATE users SET user_type = ${type} WHERE user_id = ${id}`;
  connection.query(sqlQuery, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback();
  });
};

db.getAllUsers = function(successCallback, failureCallback) {
  const sqlQuery = `SELECT * FROM users`;
  connection.query(sqlQuery, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(rows);
  });
};

// PRODUCTS

db.createProduct = function(product, successCallback, failureCallback) {
  const sqlQuery = `INSERT INTO products (product_name, product_type, product_price, product_proof, product_descr, product_img, product_packable, product_stock) VALUES (?, ?, ?, ?, ?, ?, ?, ? );`;
  const payload = [
    product.product_name,
    product.product_type,
    product.product_price,
    product.product_proof,
    product.product_descr,
    product.product_img,
    product.product_packable,
    product.product_stock,
    product.product_id
  ];
  connection.query(sqlQuery, payload, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(rows);
  });
};

db.getDogsProducts = function(successCallback, failureCallback) {
  const sqlQuery = `SELECT * FROM products WHERE featuring = 0`;
  connection.query(sqlQuery, function(err, data, fields) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(data);
  });
};

db.getFeatProducts = function(successCallback, failureCallback) {
  const sqlQuery = `SELECT * FROM products WHERE featuring = 1`;
  connection.query(sqlQuery, function(err, data, fields) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(data);
  });
};

db.getAllProducts = function(successCallback, failureCallback) {
  const sqlQuery = `SELECT * FROM products`;
  connection.query(sqlQuery, function(err, data, fields) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(data);
  });
};

db.getProduct = function(product, successCallback, failureCallback) {
  const { id } = product.body;
  const sqlQuery = `SELECT * FROM products WHERE product_id=${id}`;
  connection.query(sqlQuery, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    if (rows.length > 0) {
      successCallback(rows[0]);
    } else {
      failureCallback('Product not found.');
    }
  });
};

db.updateProduct = function(product, successCallback, failureCallback) {
  const sqlQuery = `UPDATE products SET product_name = ?, product_type = ?, product_price = ?, product_proof = ?, product_descr = ?, product_img = ?, product_packable = ?, product_stock = ? WHERE product_id = ?`;
  const payload = [
    product.product_name,
    product.product_type,
    product.product_price,
    product.product_proof,
    product.product_descr,
    product.product_img,
    product.product_packable,
    product.product_stock,
    product.product_id
  ];
  connection.query(sqlQuery, payload, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(rows);
  });
};

db.deleteProduct = function(product, successCallback, failureCallback) {
  const { id } = product;
  const sqlQuery = `DELETE FROM products WHERE product_id IN (?)`;
  connection.query(sqlQuery, [id], function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    if (rows.affectedRows > 0) {
      successCallback(rows[0]);
    } else {
      failureCallback('Product not found.');
    }
  });
};

module.exports = db;
