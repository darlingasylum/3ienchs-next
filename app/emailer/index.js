const nodemailer = require('nodemailer');

const express = require('express');
const router = express.Router();

router.post('/', sendMail);

module.exports = router;

let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '6476916c2eaa80',
    pass: '816a4085130072',
  },
});

function sendMail(req, res) {
  console.log('hi');
  transport.sendMail(req.body, function (err, info) {
    if (err) {
      return console.log(err);
    } else {
      return console.log(info);
    }
  });
}
