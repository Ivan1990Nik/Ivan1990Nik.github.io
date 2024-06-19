const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = state.newPostText;
      state.newPostText = "";
      state.posts.push({ id: 3, messeges: post, likesCount: 0 });
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;

  }

}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;