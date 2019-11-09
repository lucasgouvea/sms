const chai = require('chai');
const request = require('request');
const { endpoint } = require('../config');

const { expect } = chai;

const options = {
  method: 'post',
  body: { textMessage: 'TESTE DE MESA' },
  json: true,
  url: `${endpoint.url}/encode`,
};

describe('Encoder API', () => {
  it('Should handle a request to encode a text message and send the encoded'
  + ' number sequence back', (done) => {
    request(options, (err, _, body) => {
      expect(err).to.be.equal(null);
      expect(body.numberSequence).to.be.equals('833777783303_33063377772');
      done();
    });
  });
});
