import createSagaMiddleware from 'redux-saga';

const dev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export { dev, middleware, sagaMiddleware };