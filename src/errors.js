const errorCodes = {
    1001: "INVALID_API_KEY: The api key passed is invalid",
    1002: "CLIENT_ACCOUNT_DEACTIVATED: The account linked to an api key has been deactivated.",
    1003: "METADATA_ADDRESS_LIMIT_EXCEEDED: You've exceeded the character length for metadata array",
    1004: "INTERNAL_SERVER_ERROR: An internal server error",
    1005: "UNSUPPORTED_CURRENCY: The currency you provided is currently not",
    1007: "INVALID_FEE_ESTIMATION_DURATION: The fee estimation duration value specified is not valid",
    1008: "INVALID_TRANSACTION_AMOUNT: Amount specified is too low or empty or invalid",
    1009: "INVALID_INSUFFICIENT_BALANCE: You do not have enough balance to proceed with the transaction.",
    1010: "REQUEST_RATE_LIMITED: You have exceeded the rate limits per minutes for your IP address",
    1011: "INVALID_INVOICE_ID: The invoice Id provided is invalid or doesn't exist",
    1024: "INVOICE_ENGAGED_OR_CANCELLED: The invoice cannot be cancelled because it has already been paid to or previously cancelled."
}
module.exports = {
    errorCodes
}