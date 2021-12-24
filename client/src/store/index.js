import { combineReducers, createStore } from 'redux'
import authReducer from '../features/Auth/store'
import StudentReducer from '../features/Dashboard/Student/store'
const rootReducer = combineReducers({ auth: authReducer,students:StudentReducer })

export default function configureStore() {
    const store = createStore(
        rootReducer,
        //   composeWithDevTools(applyMiddleware(sagas))
    );

    return store;
}