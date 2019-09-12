// @root/api/country.js

const productsApi = function productsApi(connection) {
  const router = require("express").Router();
  const bieresModel = require("./../services/beers")(connection);

  router.get("/beers", (req, res) => {
    bieresModel.getProducts((err, dataset) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(dataset);
    }, req.params.id);
  });

  //   router.get("/classicbieres", (req, res) => {
  //     bieresModel.getClassicBieres((err, dataset) => {
  //       console.log("je suis dans l'API");
  //       res.send(dataset);
  //     }, null);
  //   });

  //   router.get("/specialsbieres", (req, res) => {
  //     bieresModel.getSpecialsBieres((err, dataset) => {
  //       res.send(dataset);
  //     }, null);
  //   });

  //   router.post("/biere", (req, res) => {
  //     bieresModel.post((err, dataset) => {
  //       console.log(dataset);
  //       if (err) return res.status(500).send(err);
  //       return res.status(200).send(dataset);
  //     }, req.body);
  //   });

  //   router.patch("/biere", (req, res) => {
  //     bieresModel.update((err, dataset) => {
  //       if (err) return res.status(500).send(err);
  //       else return res.status(200).send(dataset);
  //     }, req.body);
  //   });

  //   router.delete("/bieres", (req, res) => {
  //     bieresModel.remove((err, dataset) => {
  //       if (err) return res.status(500).send(err);
  //       return res.status(200).send(dataset);
  //     }, req.body); // tableau d'ids ici ...
  //   });

  return router;
};

module.exports = productsApi;
