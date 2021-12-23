import { combineReducers, createStore } from 'redux'
import authReducer from '../features/Auth/store'
const rootReducer = combineReducers({ auth: authReducer })

export default function configureStore() {
    const store = createStore(
        rootReducer,
        //   composeWithDevTools(applyMiddleware(sagas))
    );

    return store;
}