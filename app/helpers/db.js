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
  const sqlQuery = `INSERT INTO products (product_name, product_type, product_price, product_proof, product_descr, product_img, product_stock) VALUES (?, ?, ?, ?, ?, ?, ?);`;
  const payload = [
    product.product_name,
    product.product_type,
    product.product_price,
    product.product_proof,
    product.product_descr,
    product.product_img,
    product.product_stock
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

db.getProduct = function(id, successCallback, failureCallback) {
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
  const sqlQuery = `UPDATE products SET product_name = ?, product_type = ?, product_price = ?, product_proof = ?, product_descr = ?, product_img = ?, product_bg = ?, title_color = ?,  text_color = ?,  featuring = ?,  partner = ?, product_stock = ? WHERE product_id = ?`;
  const payload = [
    product.name,
    product.type,
    product.price,
    product.proof,
    product.description,
    product.image,
    product.background,
    product.titleColor,
    product.textColor,
    product.featuring,
    product.partner,
    product.stock,
    product.id
  ];

  const query = connection.query(sqlQuery, payload, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(rows);
  });
};

db.deleteProduct = function(id, successCallback, failureCallback) {
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

// ORDERS

db.makeOrder = function(input, successCallback, failureCallback) {
  // const sqlQuery = `DELETE FROM products WHERE product_id IN (?)`;
  const q =
    'INSERT into orders (order_number, order_date, order_pickupdate, order_price, order_over) VALUES (?, now(), ?, ?, ?)';
  const q2 =
    'INSERT into order_details (details_orderid, details_productid, details_productqty) VALUES (?, ?, ?)';
  const query1 = connection.query(
    q,
    [
      input.order_number,
      input.order_pickupdate,
      input.order_price,
      input.order_over
    ],
    function(err, resultsFromQ1, fields) {
      if (err) {
        return failureCallback(err, null);
      } else {
        console.log('resultats requete 1 --> ', resultsFromQ1);

        const tmp = [];
        input.basket.forEach((element, i) => {
          connection.query(
            q2,
            [resultsFromQ1.insertId, element.product_id, element.quantity],
            function(err, dataFromQ2, fields) {
              console.log('requete 2 --> ', this.sql);
              console.log('resultats requete 2 --> ', dataFromQ2);
              if (err) return failureCallback(err, null);
              tmp.push(dataFromQ2);
              if (i === input.basket.length - 1) {
                return successCallback(resultsFromQ1.insertId);
              }
            }
          );
        });
      }
    }
  );
  console.log('requete 1 --> ', query1.sql);
};

db.checkOrderNumber = function(orderNumber, successCallback, failureCallback) {
  const sql = `SELECT * FROM orders WHERE order_number = ?`;
  const q = connection.query(sql, [orderNumber], function(err, result) {
    if (result.length === 0) {
      return failureCallback();
    } else return successCallback();
  });
};

db.getOrderNumber = function(orderId, successCallback, failureCallback) {
  const sql = `SELECT * FROM orders WHERE order_id = ?`;
  const q = connection.query(sql, [orderId], function(err, result) {
    if (err) return failureCallback(err);
    else return successCallback(result);
  });
};

//EVENTS

db.createEvent = function(event, successCallback, failureCallback) {
  const sqlQuery = `INSERT INTO events (title, date, subtitle, description) VALUES (?, ?, ?, ?);`;
  const payload = [event.title, event.date, event.subtitle, event.description];

  connection.query(sqlQuery, payload, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(rows);
  });
};

db.getAllEvents = function(successCallback, failureCallback) {
  const sqlQuery = `SELECT * FROM events`;
  connection.query(sqlQuery, function(err, data, fields) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(data);
  });
};

db.updateEvent = function(event, successCallback, failureCallback) {
  const sqlQuery = `UPDATE events SET title = ?, date = ?, subtitle = ?, description = ? WHERE event_id = ?`;
  const payload = [
    event.title,
    event.date,
    event.subtitle,
    event.description,
    event.event_id
  ];
  connection.query(sqlQuery, payload, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(rows);
  });
};

db.deleteEvent = function(event, successCallback, failureCallback) {
  const { event_id } = event;
  const sqlQuery = `DELETE FROM events WHERE event_id IN (?)`;
  connection.query(sqlQuery, [event_id], function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    if (rows.affectedRows > 0) {
      successCallback(rows[0]);
    } else {
      failureCallback('Event not found.');
    }
  });
};

//ARTISTS

db.createArtist = function(artist, successCallback, failureCallback) {
  const sqlQuery = `INSERT INTO artists (title, subtitle, description, images, musician) VALUES (?, ?, ?, ?, ?);`;
  const payload = [
    artist.title,
    artist.subtitle,
    artist.description,
    artist.images,
    artist.musician
  ];

  connection.query(sqlQuery, payload, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(rows);
  });
};

db.getArtworkArtists = function(successCallback, failureCallback) {
  const sqlQuery = `SELECT * FROM artists WHERE musician = 0`;
  connection.query(sqlQuery, function(err, data, fields) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(data);
  });
};

db.getMusicArtists = function(successCallback, failureCallback) {
  const sqlQuery = `SELECT * FROM artists WHERE musician = 1`;
  connection.query(sqlQuery, function(err, data, fields) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(data);
  });
};

db.updateArtist = function(artist, successCallback, failureCallback) {
  const sqlQuery = `UPDATE artists SET title = ?, subtitle = ?, description = ?, images = ?, musician = ? WHERE artist_id = ?`;
  const payload = [
    artist.title,
    artist.subtitle,
    artist.description,
    artist.images,
    artist.musician,
    artist.artist_id
  ];
  connection.query(sqlQuery, payload, function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback(rows);
  });
};

db.deleteArtist = function(artist, successCallback, failureCallback) {
  const { artist_id } = artist;
  const sqlQuery = `DELETE FROM artists WHERE artist_id IN (?)`;
  connection.query(sqlQuery, [artist_id], function(err, rows, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    if (rows.affectedRows > 0) {
      successCallback(rows[0]);
    } else {
      failureCallback('artist not found.');
    }
  });
};

module.exports = db;
