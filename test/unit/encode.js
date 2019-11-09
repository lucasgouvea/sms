const chai = require('chai');
const { encode } = require('../../app/services/encode');

const { expect } = chai;

describe('Decoder units', () => {
  it('Should encode a text message to a number sequence (TESTE DE MESA)', (done) => {
    const encoded = encode('TESTE DE MESA');
    expect(encoded).to.be.equal('833777783303_33063377772');
    done();
  });
  it('Should encode a text message to a number sequence (AAA)', (done) => {
    const encoded = encode('AAA');
    expect(encoded).to.be.equal('2_2_2');
    done();
  });
  it('Should encode a text message to a number sequence (AB)', (done) => {
    const encoded = encode('AAA');
    expect(encoded).to.be.equal('2_2_2');
    done();
  });
  it('Should not encode if a text message has more than 255 characters', (done) => {
    const encoded = encode(
      'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry'
      + 's standard dummy text ever since the 1500s, when an unknown'
      + ' printer took a galley of type and scrambled it to make a type'
      + ' specimen book. It has survived not only five centuries, but also',
    );
    expect(encoded).to.be.equal(null);
    done();
  });
});
