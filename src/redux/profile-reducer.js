const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, messeges: "Lorem data", likesCount: 2 },
    { id: 2, messeges: "HLorem from", likesCount: 75 },
  ],
  newPostText: "comintes"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:  {
      let post = state.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: 3, messeges: post, likesCount: 0 }],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return  {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state;

  }

}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;