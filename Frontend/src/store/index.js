import {legacy_createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { loginReducer, signupReducer } from './auth/auth.reducer';
import { createTaskReducer, deleteTaskReducer, getTaskReducer } from './task/task.reducer';

const rootReducer = combineReducers({
	loginReducer,
	signupReducer,
	createTaskReducer,
	deleteTaskReducer,
	getTaskReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));