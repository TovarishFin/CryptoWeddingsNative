import { call } from 'redux-saga/effects'

function* test() {
  console.log('network saga is running...')
}

function* networkSaga() {
  yield call(test)
}

export default networkSaga
