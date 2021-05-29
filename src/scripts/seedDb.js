/* eslint-disable */
require('dotenv').config();
const { Seeder } = require('mongo-seeding');
const path = require('path');
const log = require('../helpers/logger');

const mongoConfig = {
  database: process.env.MONGODB_URI,
  dropDatabase: true,
};

const seeder = new Seeder(mongoConfig);

const collectionns = seeder.readCollectionsFromPath(
  path.resolve(__dirname, './data'),
);

(async function () {
  try {
    await seeder.import(collectionns);
    log.info('Data imported to the database successfully');
  } catch (err) {
    log.error('There was an error filling the database:', err);
  }
})();
