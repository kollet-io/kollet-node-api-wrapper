const expect = require('chai').expect
const Kollet = require("../src/index")

// Provide API_KEY to run test
let client = new Kollet(process.env.API_KEY);

describe('Kollet Merchant API Test', () => {
    it('Get all available currencies with valid API KEY', () => {
        return client
            .getCurrencies()
            .then(response => {
                expect(typeof response).to.equal('object')
                expect(response.success).to.equal(true)
            })
    })

    it('Create payment address', () => {
        return client
            .createAddress('btc', 'kollet_user')
            .then(response => {
                expect(typeof response).to.equal('object')
                expect(response.success).to.equal(true)
            })
    })

    it('Get balance of a particular cryptocurrency', () => {
        return client
            .getBalance("btc")
            .then(response => {
                expect(typeof response).to.equal('object')
                expect(response.success).to.equal(true)
            })
    })

    it('Get an estimated fee for sending funds', () => {
        return client
            .estimateNetworkFee("0.000536", "btc", "FASTEST")
            .then(response => {
                expect(typeof response).to.equal('object')
                expect(response.success).to.equal(true)
            })
    })
})