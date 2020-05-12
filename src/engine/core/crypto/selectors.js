import { createSelector } from 'reselect';
export const getCryptoDataSelector = state => state.cryptoData.data;
export const cryptoCurrencyActiveSelector  = state => state.cryptoData.currency;

export const activeCryptoCurrencyInfoSelector = createSelector(
    getCryptoDataSelector,
    cryptoCurrencyActiveSelector,
    (data, currency) => data[currency] || {}
);

export const inputSelector = state => state.cryptoData.input;
export const currencyToExchangeSelector = state => state.cryptoData.currencyToExchange;

export const activeCurrencyExchangeSelector = createSelector(
    activeCryptoCurrencyInfoSelector,
    inputSelector,
    currencyToExchangeSelector,
    (currencyInfo, input, currencyToExchange) => {
        const rates = currencyInfo[currencyToExchange];
        if (typeof rates === 'number') {
            return rates * input
        }
        return 0;
    }
    
);

