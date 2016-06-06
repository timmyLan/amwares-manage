import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

var buildStore = compose(applyMiddleware(thunk))(createStore);

export default function configureStore(initialState) {
    const store = buildStore(rootReducer, initialState,
        window.devToolsExtension && window.devToolsExtension()
    );

    if(module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(require('./reducers'))
        })
    }

    return store
}
