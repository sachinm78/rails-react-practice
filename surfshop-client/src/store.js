import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import surfboards from './reducers/surfboards';
import surfboardFormData from './reducers/surfboardFormData';

const reducers = combineReducers({
  surfboards: surfboards,
  surfboardFormData
});

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware))
);