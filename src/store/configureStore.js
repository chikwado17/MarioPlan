import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../rootReducers/rootReducers';


export const configureStore = (preloadedState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer = compose(...storeEnhancers);

    const store = createStore(
        rootReducers,
        preloadedState,
        composedEnhancer
    );

    return store;
}