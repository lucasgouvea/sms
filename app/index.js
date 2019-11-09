const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const router = require('./router');
const mongo = require('./mongo/index');

dotenv.config();

const app = express();

const { API_PORT } = process.env;

mongo.connectMongo();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.static('client'));

app.get('*', (_, res) => {
  res.status(200).send('404');
});

app.listen(API_PORT, () => console.log(`API Up on ${API_PORT}`));
