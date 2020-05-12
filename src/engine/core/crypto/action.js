import * as types from './types';

export function setCryptoData (data) {
    return {
        type: types.SET_CRYPTO_DATA,
        payload: data
    }
}

export function setActiveCurrency(currency) {
    return {
        type: types.SET_ACTIVE_CRYPTO_CURRENCY,
        payload: currency
    }
}

export function setInput(input) {
    return {
        type: types.SET_INPUT,
        payload: input
    }
}

export function setActiveCurrencyExchange(currencyToExchange) {
    return {
        type: types.SET_ACTIVE_CURRENCY_EXCHANGE,
        payload: currencyToExchange
    }
}
