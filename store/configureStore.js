import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import network from './network/reducer'
import rootSaga from './rootSaga'

const configureStore = () => {
  const rootReducer = combineReducers({
    network
  })

  const sagaMiddleware = createSagaMiddleware()
  const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const enhance = devToolsExtension || compose
  const enhancers = enhance(applyMiddleware(sagaMiddleware))
  const store = createStore(rootReducer, {}, enhancers)

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
