require('dotenv').config();
const express = require('express');
const morgan = require('./middleware/morgan');
const {
  errorProductionResponse,
  errorDevelopmentResponse,
} = require('./middleware/errorHandler');

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

if (process.env.NODE_ENV === 'production') {
  app.use(errorProductionResponse);
} else {
  app.use(errorDevelopmentResponse);
}

module.exports = app;
