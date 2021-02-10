import { combineReducers } from 'redux';
import projectReducer from '../redux/auth/project/reducers/projectReducer';
import authReducer from '../redux/auth/reducers/authReducers';


const rootReducers = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducers;