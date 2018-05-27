# stock-quote

> Real time stock quote data using yahoo-stocks.

## Info

Supports all the Exchanges from listed on yahoo finance.

Yahoo finance provides stock price and details for stocks using a particular Id and extension. For instance, Hdfc Bank Ltd. listed in NSE(National Stock Exchange India) has symbol as HDFCBANK and extension as NS. Similarly, in BSE the symbol is same but the extension is BO. Please check the Usage section for more detailed usage.

You can get the list of exchanges from the following URL:
```
https://help.yahoo.com/kb/SLN2310.html
```

## Install
```
npm i stock-quote
```
## Usage
```
const quote = require('stock-quote');
quote.getQuote('GOOGL')
.then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});

or 

quote.getQuote('HDFCBANK', 'NS')
.then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});



```
