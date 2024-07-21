import { profileAPI, } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, messeges: "Lorem data", likesCount: 2 },
    { id: 2, messeges: "HLorem from", likesCount: 75 },
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = action.addPost;
      return {
        ...state,
        posts: [...state.posts, { id: 3, messeges: post, likesCount: 0 }],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state;

  }

}



export const addPostActionCreator = (addPost) => ({ type: ADD_POST, addPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}



export default profileReducer;