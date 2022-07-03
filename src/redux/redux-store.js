/* import { configureStore, createReducer, counterSlice } from '@reduxjs/toolkit'; */
import counterReducer from '../features/counter/counterSlice';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import {combineReducers, legacy_createStore as createStore} from "redux";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export let store = configureStore(reducers);


export default store;