/* import { createAction, createReducer } from '@reduxjs/toolkit';
 */
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


сonst dialogsReducer = (state , action) => {
const initialState = {
    dialogs: [
        {id: 1, name: 'Milagros'},
        {id: 2, name: 'Jack'},
        {id: 3, name: 'Sanja'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Visnja'} 
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How r u?'},
        {id: 3, message: 'uff'},
        {id: 4, message: 'hey'},
        {id: 5, message: 'oi'}
    ],
    newMessageBody: ""
 }
 }; 

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
 }

 export const sendMessageCreator = () => ({type: SEND_MESSAGE})
 export const updateNewMessageBodyCreator = (body) =>
     ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

 export default dialogsReducer;