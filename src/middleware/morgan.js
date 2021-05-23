const morgan = require('morgan');
const log = require('../helpers/logger');

module.exports = morgan('short', {
  stream: {
    write: (message) => log.info(message.trim()),
  },
});
