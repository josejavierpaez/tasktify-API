const express = require('express');
const morgan = require('./middleware/morgan');

const app = express();

app.use(express.json());

app.use(morgan);
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/', (req, res) => {
  res.json('Hello world');
});

module.exports = app;
