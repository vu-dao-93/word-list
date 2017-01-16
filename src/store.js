import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware';

import reducers from './reducers/';

const middleware = applyMiddleware(logger(), promise(), thunk);
export default createStore(reducers, middleware);
