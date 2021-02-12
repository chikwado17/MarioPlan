import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import projectReducer from '../redux/project/reducers/projectReducer';
import authReducer from '../redux/auth/reducers/authReducers';


const rootReducers = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducers;