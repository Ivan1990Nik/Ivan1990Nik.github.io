import React from 'react';
import Myposts from './Myposts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';






const MyPosts = (props) => {

  let state = props.store.getState().profilePage

  

  let postsElements = state.posts.map((p, i) => <Post key={i} messeges={p.messeges} likesCount={p.likesCount} />)


  let newPostText = state.newPostText

  let addPost = () => {
    props.dispatch(addPostActionCreator());

  }


  let onPostChenge = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }




  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChenge}
        placeholder='coment'
          value={newPostText} />
      </div>
      <div>
        <button onClick={addPost} >Add post</button>
      </div>
      <div className={Myposts.items}>
        {postsElements}
      </div>
    </div>

  )
}

export default MyPosts;