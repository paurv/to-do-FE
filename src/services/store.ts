import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import { notesReducer } from './reducers/notesReducers';
import { rootReducer } from '../reducers/rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)