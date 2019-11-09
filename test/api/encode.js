const chai = require('chai');
const request = require('request');
const { endpoint } = require('../config');

const { expect } = chai;

const textMessage = 'Lorem Ipsum is simply dummy text of the printing and '
  + 'typesetting industry. Lorem Ipsum has been the industry'
  + 's standard dummy text ever since the 1500s, when an unknown'
  + ' printer took a galley of type and scrambled it to make a type'
  + ' specimen book. It has survived not only five centuries, but also';

const options = {
  method: 'post',
  body: { textMessage },
  json: true,
  url: `${endpoint.url}/encode`,
};

describe('Encoder API', () => {
  it('Should handle a request to encode a text message and send the encoded'
  + ' number sequence back', (done) => {
    request(options, (err, res) => {
      expect(err).to.be.equal(null);
      expect(res.statusCode).to.be.equal(400);
      done();
    });
  });
});
