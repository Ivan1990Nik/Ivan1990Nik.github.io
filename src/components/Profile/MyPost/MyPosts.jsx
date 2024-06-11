import React from 'react';
import Myposts from './Myposts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
        <div>My posts
          <div>
          <textarea></textarea>
          <button>Add post</button>
          <div className={Myposts.items}>New post</div>
          </div>
          <Post messeges="Lorem data" age="20" likeNumber="2"/>
          <Post messeges="Lorem from" age="210" likeNumber="65"/>
          <Post messeges="Lorem ipsum" age="204" likeNumber="142"/>
        </div>
  )
}

export default MyPosts;