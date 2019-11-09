const dotenv = require('dotenv');
const express = require('express');
const router = require('./router');
const mongodb = require('./mongo/index');

dotenv.config();

const app = express();
const { API_PORT } = process.env;

try {
  mongodb.connect();
} catch (err) {
  throw new Error(err);
}

app.use(express.json());
app.use(router);
app.use(express.static('client'));

app.get('*', (_, res) => {
  res.status(200).send('404');
});

app.listen(API_PORT, () => console.log(`Up on ${API_PORT}`));
