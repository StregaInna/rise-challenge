import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import loggingMiddleware from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from './rootReducer';

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleWare.withExtraArgument({ axios }), loggingMiddleware)
);
