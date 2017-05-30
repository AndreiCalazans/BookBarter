import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import booksReducer from './booksReducer';
import tradeReducer from './trade_reducer';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  handleBooks: booksReducer,
  trades: tradeReducer
});

export default rootReducer;
