'use strict';

const request = require('request');

const getUrl = (symbol, extension) => {
    if (extension === undefined || extension === '') {
        extension = '';
    } else {
        extension = `.${extension}`;
    }
    let url = `https://query1.finance.yahoo.com/v10/finance/\
quoteSummary/${symbol}${extension}?&modules=financialData`;
    return url;
};

const getJson = url =>
    new Promise((resolve, reject) => {
        let requestOpts = {
            url: url,
            json: true,
            headers: { 'User-agent': 'request' },
        };

        request.get(requestOpts, (err, res, data) => {
            if (err) {
                reject(err);
            } else if (res.statusCode !== 200) {
                reject(res.statusCode);
            } else {
                resolve(data);
            }
        });
    });

const getQuote = (symbol, extension) =>
    new Promise((resolve, reject) => {
        let url = getUrl(symbol, extension);
        getJson(url)
            .then(data => {
                resolve({
                    symbol,
                    currency:
                        data.quoteSummary.result[0].financialData
                            .financialCurrency,
                    currentPrice:
                        data.quoteSummary.result[0].financialData.currentPrice
                            .raw,
                    totalRevenue:
                        data.quoteSummary.result[0].financialData.totalRevenue
                            .fmt,
                    ebitda:
                        data.quoteSummary.result[0].financialData.ebitda.fmt,
                    cashPerShare:
                        data.quoteSummary.result[0].financialData
                            .totalCashPerShare.raw,
                    currentRatio:
                        data.quoteSummary.result[0].financialData.currentRatio
                            .raw,
                    quickRatio:
                        data.quoteSummary.result[0].financialData.quickRatio
                            .raw,
                    debtToEquity:
                        data.quoteSummary.result[0].financialData.debtToEquity
                            .raw,
                    revenuePerShare:
                        data.quoteSummary.result[0].financialData
                            .revenuePerShare.raw,
                    returnOnEquity:
                        data.quoteSummary.result[0].financialData.returnOnEquity
                            .fmt,
                    grossProfits:
                        data.quoteSummary.result[0].financialData.grossProfits
                            .fmt,
                    freeCashflow:
                        data.quoteSummary.result[0].financialData.freeCashflow
                            .fmt,
                    operatingCashflow:
                        data.quoteSummary.result[0].financialData
                            .operatingCashflow.fmt,
                    grossMargins:
                        data.quoteSummary.result[0].financialData.grossMargins
                            .fmt,
                    operatingMargins:
                        data.quoteSummary.result[0].financialData
                            .operatingMargins.fmt,
                    profitMargins:
                        data.quoteSummary.result[0].financialData.profitMargins
                            .fmt,
                    ebitdaMargins:
                        data.quoteSummary.result[0].financialData.ebitdaMargins
                            .fmt,
                });
            })
            .catch(err => {
                reject(err);
            });
    });

module.exports = {
    getQuote: getQuote,
};
