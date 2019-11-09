const chai = require('chai');
const request = require('request');
const { endpoint } = require('../config');

const { expect } = chai;

const options = {
  method: 'get',
  json: true,
};

describe('Decode Logs API', () => {
  it('Should get all decode logs ', (done) => {
    options.url = `${endpoint.url}/logs/decode`;
    request(options, (err, _, body) => {
      expect(err).to.be.equal(null);
      expect(body.decodeLogs).to.be.an('array');
      done();
    });
  });
});

describe('Encode Logs API', () => {
  it('Should get all encode logs ', (done) => {
    options.url = `${endpoint.url}/logs/encode`;
    request(options, (err, _, body) => {
      expect(err).to.be.equal(null);
      expect(body.encodeLogs).to.be.an('array');
      done();
    });
  });
});
