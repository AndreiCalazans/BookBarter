import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import booksReducer from './booksReducer';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  handleBooks: booksReducer
});

export default rootReducer;
