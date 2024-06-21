import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

  let state = props.store.getState().profilePage;


  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChenge = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <MyPosts
      updateNewPostText={onPostChenge}
      addPost={addPost} 
      profilePage={state}/>
  )
}

export default MyPostsContainer;