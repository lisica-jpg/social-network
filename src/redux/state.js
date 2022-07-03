import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
      profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 2},
            {id: 2, message: 'It\'s my first post', likesCount: 41},
            {id: 3, message: 'Blabla', likesCount: 20},
            {id: 4, message: 'Dada', likesCount: 15}
        ],
        newPostText: 'lisica'
    },
    dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
      console.log('State changed');
  },
  getState() {
      debugger;
      return this._state;
  },
  subscribe(observer) {
      this._callSubscriber = observer; 
  },

 /*  dispatch(action) { 
      if (action.type === ADD_POST) {
          let newPost = {
              id: 5,
              message: this._state.profilePage.newPostText,
              likesCount: 0
          };
          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText = '';
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
          this._state.profilePage.newPostText = action.newText;
          this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
          this._state.dialogsPage.newMessageBody = action.body;
          this._callSubscriber(this._state);
      } else if (action.type === SEND_MESSAGE) {
          let body = this._state.dialogsPage.newMessageBody;
          this._state.dialogsPage.newMessageBody = '';
          this._state.dialogsPage.messages.push({id: 6, message: body});
          this._callSubscriber(this._state);
      } */
  dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);
  }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;