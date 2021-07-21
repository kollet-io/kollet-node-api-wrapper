/**
 * Kollet Merchant API Node Wrapper
 * @author Kollet.io
 * @license MIT
 * @version 0.0.1 
 */

const fetch = require("node-fetch").default;

class Kollet {
    #baseUrl = "https://api.kollet.io/v1/";
    #endpoints = {
        currencies: "currencies",
        create_address: "address/create",
        balance: "balance",
        estimate_fee: "estimateFee",
        send: "send"
    };

    /**
     * @param {string} apiKey 
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
    };

    _request(endpoint = "", options = {}) {
        let url  = `${this.#baseUrl}${endpoint}`;
        
        let header = {
            "Content-Type": "application/json"
        };

        let config = {
            ...options,
            headers: header
        };

        return fetch(url, config).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res);
        })
    }

    /**
     * Get all the cryptocurrencies supported by Kollet.
     */
    getCurrencies() {
        let url = this.#endpoints.currencies;
        let payload = {
            accessToken: this.apiKey
        }
        let config = {
            method: "post",
            body: JSON.stringify(payload)
        };

        return this._request(url, config);
    }

    /**
     * Generate a payment address. This is the address that customers pay to.
     * @param {string} currency This is the code of the supported cryptocurrency. 
     * Visit the supported cryptocurrency section to view the currencies supported and their various codes. e.g. BTC
     * @param {string} label This is a unique id that is linked to the address. 
     * You can use this id to identify different users or payment addresses.
     * @param {object} metadata An optional field where you can store a JSON object. 
     * This field is attached to all webhooks when we are notifying you of new changes to the status of a payment.
     */
    createAddress(currency = "", label = "", metadata = {}) {
        let url = this.#endpoints.create_address;
        let payload = {
            accessToken: this.apiKey,
            currency,
            label,
            metadata
        };

        let config = {
            method: "post",
            body: JSON.stringify(payload)
        };

        return this._request(url, config);
    }
}

module.exports = Kollet