import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
const loggerMiddleware = createLogger();
const buildStore = compose(applyMiddleware(thunk, loggerMiddleware))(createStore);

export default function configureStore(initialState) {
  const store = buildStore(rootReducer, initialState,
    window.devToolsExtension && window.devToolsExtension()
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store
}
