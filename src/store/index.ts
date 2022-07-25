import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import history from 'helpers/history'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

// Reducers
import pool from './reducers/pool'
import snackbar from './reducers/snackbar'
import staking from './reducers/staking'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  router: connectRouter(history),
  pool,
  snackbar,
  staking,
});

declare global {
  interface AppState extends ReturnType<typeof rootReducer> {}

  type AppSelector<T = unknown> = (state: AppState) => T
}

declare module 'react-redux' {
  interface DefaultRootState extends AppState {}
}

const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
  );
  sagaMiddleware.run(rootSaga)

  return store
};

export type AppState = ReturnType<typeof rootReducer>

export default configureStore