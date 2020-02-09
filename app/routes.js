'use strict';
// Import dependencies
var passport = require('passport');
var express = require('express');
// Set up middleware
var requireAuth = passport.authenticate('jwt', { session: false });

// Export the routes for our app to use
module.exports = function(app) {
  // API Route Section

  // Initialize passport for use
  app.use(passport.initialize());

  // Bring in defined Passport Strategy
  require('./helpers/passport')(passport);

  // Create API group routes
  var apiRoutes = express.Router(); // créer un router
  var userRoutes = require('./users/users.controller');
  var productsRoutes = require('./products/products.controller');
  var ordersRoutes = require('./orders/orders.controller');
  var adminRoutes = require('./admin/admin.controller');
  var eventsRoutes = require('./events/events.controller');
  var artistsRoutes = require('./artists/artists.controller');

  //Protected authenticated route with JWT
  //   apiRoutes.get('/dashboard', requireAuth, function(request, response) {
  //     response.send(
  //       'It worked User id is: ' +
  //         request.user.user_id +
  //         ', Email id is: ' +
  //         request.user.user_email +
  //         '.'
  //     );
  //   });

  const admin = require('./admin/admin.controller');
  // dans request il y a le user, dans response c'est nous qui définissons la response
  // apiRoutes.get('/admin', requireAuth, function(request, response) {
  //   console.log(request);
  //   if (request.user.admin == 1) {
  //     admin.getAllUsers(request, response);
  //   } else {
  //     console.log('user PAS OK ==> ', request.user);
  //     return { success: false, message: 'You cannot get there' };
  //   }
  // });

  // Set url for API group routes
  app.use('/api', apiRoutes); // on préfixe par /api
  app.use('/api/users', userRoutes);
  app.use('/api/products', productsRoutes);
  app.use('/api/orders', ordersRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/events', eventsRoutes);
  app.use('/api/artists', artistsRoutes);
};
