require('dotenv').config();
const app = require('./app');
const log = require('./helpers/logger');

const PORT = process.env.PORT || 3000;

async function main() {
  await app.listen(PORT);
  log.info(`server on port ${PORT}`);
}

main();
