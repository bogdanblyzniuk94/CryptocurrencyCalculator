import * as types from './types';

const initialState = {
    data: {},
    currency: 'btc',
    input: '',
    currencyToExchange: 'uah'
};

export function setCryptoDataReducer (state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case types.SET_CRYPTO_DATA : {
            return {
                ...state,
                data: payload
            }
        }
        case types.SET_ACTIVE_CRYPTO_CURRENCY : {
            if (state.currency === payload){
                return state
            }
            return {
                ...state,
                currency: payload
            }
        }
        case types.SET_INPUT : {
            return {
                ...state,
                input: payload
            }
        }
        case types.SET_ACTIVE_CURRENCY_EXCHANGE : {
            return {
                ...state,
                currencyToExchange: payload
            }
        }
        default: {
            return state;
        }
    }
}