import { all, call, takeEvery } from 'redux-saga/effects';
import { callGetCryptoDataWorker, callGetCryptoDataWorkerPeriod } from './workers';
import { GET_CRYPTO_DATA_ASYNC } from './asyncTypes';

function * watchGetCryptoData() {
    yield takeEvery (GET_CRYPTO_DATA_ASYNC, callGetCryptoDataWorker)
}

function * watchGetCryptoDataPeriod() {
    yield takeEvery (GET_CRYPTO_DATA_ASYNC, callGetCryptoDataWorkerPeriod)
}

export function* cryptoWatcher() {
    yield all([
        call(watchGetCryptoData),
        call(watchGetCryptoDataPeriod)
    ]);
}