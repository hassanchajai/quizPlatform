import { combineReducers, createStore } from 'redux'
import authReducer from '../features/Auth/store'
import StudentReducer from '../features/Dashboard/Student/store'
import teacherReducer from '../features/Dashboard/Teachers/store'
const rootReducer = combineReducers({ auth: authReducer,students:StudentReducer,teachers:teacherReducer })

export default function configureStore() {
    const store = createStore(
        rootReducer,
        //   composeWithDevTools(applyMiddleware(sagas))
    );

    return store;
}