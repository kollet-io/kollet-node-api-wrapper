# Kollet Node API Wrapper
Node API wrapper for the Kollet Merchant API

## Features
- Get all the cryptocurrencies supported by Kollet.
- Generate a payment address. This is the address that customers pay to.
- Get a balance of a particular cryptocurrency.
- Get an estimated fee for sending funds on a particular cryptocurrency network.
- Send out funds to another wallet address on a particular cryptocurrency network.

## 📦 Installation
```
npm i kollet-io-nodejs
```

## 📝 Confuring and using module
To access the API, you will need an accessToken or API Key from the merchant [dashboard]("https://app.kollet.io/developer/integrations"). 


# Loading module
Load the module via ```require``` and pass your API key to the Kollet class. 
```js
const Kollet = require("kollet-io-nodejs")

let client = new Kollet(process.env.accessToken);

```
# Common Usages

Get all available currencies
```js

client.getCurrencies()
    .then(res => console.log(res))
    .catch(err => console.log(err))

```

Create payment address
```js

client.createAddress('btc', 'kollet_user')
    .then(res => console.log(res))
    .catch(err => console.log(err))

```

Get balance of a particular cryptocurrency
```js

client.getBalance("btc")
    .then(res => console.log(res))
    .catch(err => console.log(err))

```

Get an estimated fee for sending funds on a particular cryptocurrency network.
```js

client.estimateNetworkFee("0.000536", "btc", "FASTEST")
    .then(res => console.log(res))
    .catch(err => console.log(err))

```

Send out funds to other wallet address on a particular cryptocurrency network.
```js

client.sendCoins("0.000536", "btc", "FASTEST", "XXXXXXXXXXXXXXXXXXXX")
    .then(res => console.log(res))
    .catch(err => console.log(err))

```