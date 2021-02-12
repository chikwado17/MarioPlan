import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../rootReducers/rootReducers';
import firebase from '../firebase/firebase';


const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
  };

export const configureStore = (preloadedState) => {
//adding getfirebase and firestore to redux-thunk with the help of withExtraArgument
    const middlewares = [thunk.withExtraArgument({ getFirebase,getFirestore })];
    const middlewaresEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewaresEnhancer];

    const composeEnhancers = composeWithDevTools(
        ...storeEnhancers, 
        reactReduxFirebase(firebase,rrfConfig),
        reduxFirestore(firebase)
    );

    const store = createStore(
        rootReducers,
        preloadedState,
        composeEnhancers
    );

    if(process.env.NODE_ENV !== 'production'){
        if(module.hot){
            module.hot.accept('../rootReducers/rootReducers',() => {
                const newRootReducer = require('../rootReducers/rootReducers').default;
                store.replaceReducer(newRootReducer);
            })
        }
    }

    return store;
}