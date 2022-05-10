import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer, { fetchRocketsAPI } from './rockets/rockets';

const reducer = combineReducers({
  rocketReducer,
});

const elementStore = createStore(reducer, applyMiddleware(thunk, logger));
elementStore.dispatch(fetchRocketsAPI());

export default elementStore;
