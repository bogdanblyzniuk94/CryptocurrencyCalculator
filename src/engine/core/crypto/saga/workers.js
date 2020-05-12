import { call, put, delay} from 'redux-saga/effects';
import axios from 'axios';

import { setCryptoData } from '../action';

const CURRENCY_FOR_CHECK = ['btc', 'eth', 'xrp'];
const SECOND = 1000;
const MINUTE = 60*SECOND;

export function* callGetCryptoDataWorker () {
    try {
        const response = yield axios.get('https://api.kuna.io/v3/exchange-rates');

        const data = response.data.reduce((acc, item) => {
            const { currency } = item;
            if(CURRENCY_FOR_CHECK.includes(currency)){
                acc[currency] = item;
            }
            return acc;
        }, {})
        const action = setCryptoData(data);
        yield put(action);
    }

    catch (err) {
        console.error(err)
    }
}

export function* callGetCryptoDataWorkerPeriod () {
    while (true) {
      yield call(callGetCryptoDataWorker); 
      yield delay(MINUTE);
    }
  }