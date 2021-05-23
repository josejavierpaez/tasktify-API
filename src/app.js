require('dotenv').config();
const express = require('express');
const { errorHandler, morgan, healthCheck } = require('./middleware');

const app = express();

app.use(express.json());

app.use(morgan);
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(`${'/healthcheck'} || ${'/'}`, healthCheck);

if (process.env.NODE_ENV === 'production') {
  app.use(errorHandler.errorProductionResponse);
} else {
  app.use(errorHandler.errorDevelopmentResponse);
}

module.exports = app;
