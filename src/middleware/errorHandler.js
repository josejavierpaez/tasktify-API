/*eslint-disable*/
const errorHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const errorProductionResponse = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message || 'Internal Server Error',
  });
};

const errorDevelopmentResponse = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message || 'Internal Server Error',
    stack: err.stack || '',
  });
};
module.exports = {
  errorHandler,
  errorProductionResponse,
  errorDevelopmentResponse,
};
