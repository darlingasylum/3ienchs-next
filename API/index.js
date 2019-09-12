// @root/api/index.js

// ROUTAGE DE L'API
const api = (function api() {
  // const APIVersion = 1; // notre api est en version 1
  const database = require("./../services")({
    password: "root", // définition du mot de passe de mySQL
    database: "3ienchs-next" // base de donnée cible
  });

  const routers = []; // on exportera ce tableau une fois rempli de routeurs...
  // IMPORT DES ROUTES DE l'API USER
  // const usersRouter = require("./users")(database.connection); // module api user
  // IMPORT DES ROUTES DE l'API BIERES
  const beersRouter = require("./beers")(database.connection);
  // const commandesRouter = require("./commandes")(database.connection);
  // const detailsRouter = require("./details")(database.connection);

  // aggrégation des routeurs dans un tableau
  routers.push(beersRouter);

  return {
    // définition des propriétés publiques du module @root/api/index.js
    //   version: APIVersion,
    //   prefix: `/api/v${APIVersion}`,
    routers: routers
  }; // on récupère ces valeurs dans @root/index.js
})();

module.exports = api;
