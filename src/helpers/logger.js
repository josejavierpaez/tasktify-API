/* eslint-disable */
require('dotenv').config();
const winston = require('winston');

const date = new Date().toLocaleDateString('en-US', {
  weekday: 'short',
  day: 'numeric',
  year: 'numeric',
  month: 'long',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

const dateInclude = winston.format((info) => {
  info.message = `${date}- ${info.message}`;
  return info;
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'test' ? 'error' : 'debug',
      handleExceptions: true,
      format: winston.format.combine(
        dateInclude(),
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
});
module.exports = logger;
