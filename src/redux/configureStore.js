import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer, { fetchRocketsAPI } from './rockets/rockets';
import missionsReducer, { fetchMissionsFromApi } from './missions/missions';

const reducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,
});

const elementStore = createStore(reducer, applyMiddleware(thunk, logger));
elementStore.dispatch(fetchRocketsAPI());
elementStore.dispatch(fetchMissionsFromApi());

export default elementStore;
