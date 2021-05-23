module.exports = require('express-healthcheck')({
  healthy: () => ({
    message: 'API is healthly',
    uptime: process.uptime(),
  }),
});
