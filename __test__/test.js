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

describe('#getQuote() using Promises', () => {
    it('should load stock price of HDFCBANK from BSE', () => {
        return index.getQuote('HDFCBANK', 'BO')
            .then(data => {
                expect(data.currency).toEqual('INR');
            });
    });
});

describe('#getQuote() using Promises', () => {
    it('should load stock price of GOOGLE from NYSE', () => {
        return index.getQuote('GOOGL', '')
            .then(data => {
                expect(data.currency).toEqual('USD');
            });
    });
});
