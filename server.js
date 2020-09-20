const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

//on récupère ce qui est exporté par le fichier /API/index.js
// const api = require(__dirname + '/API');
// console.log('api -->', api);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use(api.routers);

// app.use("/", function(req, res) {
//   res.send("hello from node");
//   // on passe un objet à la vue, accessible via localhost:5000/
// });

require('./app/routes')(app);

app.listen(port, function () {
  console.log(
    'node server running @ http://localhost:' + port + ', yeah, you rock!'
  );
});
