import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore } from 'redux-persist';
import reducers from './modules/rootReducer';
import sagas from './modules/rootSaga';

import persistReducers from './persistReducers';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const store = createStore(persistReducers(reducers), composer);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
