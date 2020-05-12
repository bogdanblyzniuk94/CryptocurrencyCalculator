import { combineReducers } from 'redux';
import { setCryptoDataReducer } from '../../core/crypto/reducer';

const rootReducer = () => combineReducers ({
    cryptoData: setCryptoDataReducer,
});

export { rootReducer };