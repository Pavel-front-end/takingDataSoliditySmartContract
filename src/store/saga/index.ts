import { takeEvery } from 'redux-saga/effects'
import { PoolActions } from 'store/reducers/pool'


// Actions


//Saga functions

import { depositSaga } from './pools'


export default function* rootSaga() {
  yield takeEvery(PoolActions.depositRequest, depositSaga);

}
