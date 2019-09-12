/* jshint esversion : 6 */

// @root/model/country.js

const bieresModel = function bieresModel(connection) {
  const getProducts = function getProducts(clbk, id) {
    // console.log(id);
    let q;
    if (id) {
      q = "SELECT * FROM products WHERE product_id = ?";
    } else {
      q = "SELECT * FROM products WHERE product_packable=1";
    }
    connection.query(q, [id], function(err, data, fields) {
      console.log(this.sql);
      console.log("réponse -->", data);
      if (err) return clbk(err, null);
      else return clbk(null, data);
    });
  };

  return {
    getProducts
    //   getSpecialsBieres,
    //   post,
    //   update,
    //   remove
  };
};

module.exports = bieresModel;
