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
        address: "address/create",
        balance: "balance",
        estimate_fee: "estimateFee",
        send: "send"
    };

    /**
     * @param {string} apiKey 
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    #request(endpoint = "", options = {}) {
        let url  = `${this.#baseUrl}${endpoint}`;
        
        let headers = {
            "Content-Type": "application/json"
        };

        let config = {
            ...options,
            ...headers
        };

        return fetch(url, config).then(res => {
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })
    }

    /**
     * Get all the supported cryptocurrencies by Kollet.
     */
    getCurrencies() {
        let url = this.#endpoints.currencies;
        let config = {
            method: "POST",
            body: JSON.stringify(this.apiKey)
        };

        return this.#request(url, config);
    }
}