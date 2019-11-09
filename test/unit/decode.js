const chai = require('chai');
const { decode } = require('../../app/services/decode');

const { expect } = chai;

describe('Encoder units', () => {
  it('Should decode a number sequence to a text message', (done) => {
    const decoded = decode('833777783303_33063377772');
    expect(decoded).to.be.equal('TESTE DE MESA');
    done();
  });
});
