import { profileAPI, } from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, messeges: "Lorem data", likesCount: 2 },
    { id: 2, messeges: "HLorem from", likesCount: 75 },
  ],
  newPostText: "comintes",
  profile: null
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
    case SET_USER_PROFILE: {
      return  {
        ...state, profile: action.profile
      }
    }
    case SET_STATUS: {
      return  {
        ...state, status: action.status
      }
    }
    default:
      return state;

  }

}



export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const getUserProfile = (userId) => {
  return(dispatch) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    })
  }
}

export const getUserStatus = (userId) => {
  return(dispatch) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    })
  }
}

export const ubdateUserStatus = (status) => {
  return(dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
      dispatch(setStatus(status))
      }
    })
  }
}



export default profileReducer;