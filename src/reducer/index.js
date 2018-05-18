import * as types from '../action/types';
import auth_reducer from './auth';
import profile_reducer from './profile';
import {reducer as form_reducer} from 'redux-form';
import {combineReducers} from 'redux';

export default combineReducers({form:form_reducer,auth:auth_reducer,profile:profile_reducer});