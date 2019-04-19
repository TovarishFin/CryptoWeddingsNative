import { fork } from 'redux-saga/effects'
import network from './network/sagas'

function* rootSaga() {
  yield fork(network)
}

export default rootSaga
