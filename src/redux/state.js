
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer copy";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, messeges: "Lorem data", likesCount: 2 },
        { id: 2, messeges: "HLorem from", likesCount: 75 },
      ],
      newPostText: "comintes"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "ivan" },
        { id: 2, name: "Olga" },
        { id: 3, name: "Bogdan" },
        { id: 4, name: "Vladimir" },
        { id: 5, name: "Ruslan" },
        { id: 6, name: "Sasha" },
      ],
      messages: [
        { id: 1, message: "hi" },
        { id: 2, message: "How is your olga" },
        { id: 3, message: "Yo" },
      ],
      newMessageBody: "13"
    },
    sidebar: {}
  },
  _callSubscrider() {
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscrider = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscrider(this._state);

  }
}













window.state = store;
export default store;
