const chai = require('chai');
const request = require('request');
const { endpoint } = require('../config');

const { expect } = chai;

const options = {
  method: 'post',
  body: { numberSequence: '833777783303_33063377772' },
  json: true,
  url: `${endpoint.url}/decode`,
};

describe('Decoder API', () => {
  it('Should handle a request to decode a number sequence and send '
  + 'the decoded text message response back', (done) => {
    request(options, (err, _, body) => {
      expect(err).to.be.equal(null);
      expect(body.textMessage).to.be.equals('TESTE DE MESA');
      done();
    });
  });
});
