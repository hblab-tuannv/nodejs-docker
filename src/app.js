const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('/', function (req, res) {
  res.send('Hello Docker\n');
});

module.exports = app;
