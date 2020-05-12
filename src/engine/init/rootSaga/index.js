import { all, call } from 'redux-saga/effects';

import { cryptoWatcher } from '../../core/crypto/saga/watchers';

export function* rootSaga() {
    yield all([
        call(cryptoWatcher)
    ]);
}