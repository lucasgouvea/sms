const express = require('express');

const router = express.Router();

const { decode } = require('./controllers/decode');
const { encode } = require('./controllers/encode');
const { encodeLogs, decodeLogs } = require('./controllers/logs');

router.post('/decode', decode);
router.post('/encode', encode);
router.get('/logs/encode', encodeLogs);
router.get('/logs/decode', decodeLogs);

module.exports = router;
