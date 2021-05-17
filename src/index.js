require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

async function main() {
  await app.listen(PORT);
  console.log(`server on port ${PORT}`);
}

main();
