'use strict';

const index = require('../index');

describe('#getQuote() using Promises', () => {
    it('should load stock price of HDFCBANK from NSE', () => {
        return index.getQuote('HDFCBANK', 'NS')
    .then(data => {
        expect(data.currency).toEqual('INR');
    });
    });
});
