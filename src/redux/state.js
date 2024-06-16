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
      ]
    }
  },
  _callSubscrider() {
  },
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 5,
      messeges: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscrider(this._state);
  },
  updeteNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscrider(this._state);
  },
  subscribe(observer) {
    this._callSubscrider = observer
  }
}



export default store;

window.state = store;