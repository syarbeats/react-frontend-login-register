import AuthenticationReducer from './AuthenticationReducer';
import { combineReducers } from 'redux';

const AppReducer = combineReducers({AuthenticationReducer,});
export default AppReducer
