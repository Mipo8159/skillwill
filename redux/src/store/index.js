import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo/todo.slice'
import counterReducer from './counter/counter.slice'
import usersReducer from './users/users.slice'

const rootReducer = combineReducers({
    todo: todoReducer,
    counter: counterReducer,
    users: usersReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})