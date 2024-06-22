import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }

}


const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts) 


export default MyPostsContainer;