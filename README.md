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
npm i kollet-node-api-wrapper
```

## 📝 Usage
To access the API, you will need an accessToken or API Key from the merchant [dashboard]("https://app.kollet.io/developer/integrations"). 

```js
const Kollet = require("kollet-node-api-wrapper")

let client = new Kollet(process.env.accessToken);

// Get currencies
client.getCurrencies()
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Create payment address
client.createAddress('btc', 'kollet_user')
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Get a balance of a particular cryptocurrency.
client.getBalance("btc")
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Get an estimated fee for sending funds on a particular cryptocurrency network.
client.estimateNetworkFee("0.000536", "btc", "FASTEST")
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Send out funds to another wallet address on a particular cryptocurrency network.
client.sendCoins("0.000536", "btc", "FASTEST", "XXXXXXXXXXXXXXXXXXXX")
    .then(res => console.log(res))
    .catch(err => console.log(err))
```