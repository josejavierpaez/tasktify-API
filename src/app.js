require('dotenv').config();
const express = require('express');
const swagger = require('swagger-ui-express');
const swaggerConfig = require('./config/swagger');
const { errorHandler, morgan, healthCheck } = require('./middleware');

const app = express();

app.use(express.json());

app.use(morgan);
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/api/v1/doc', swagger.serve, swagger.setup(swaggerConfig));
app.use(`${'/api/v1/health'} || ${'/'}`, healthCheck);

if (process.env.NODE_ENV === 'production') {
  app.use(errorHandler.errorProductionResponse);
} else {
  app.use(errorHandler.errorDevelopmentResponse);
}

module.exports = app;
