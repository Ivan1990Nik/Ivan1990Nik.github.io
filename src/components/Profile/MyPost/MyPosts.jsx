import React from 'react';
import Myposts from './Myposts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

/* let posts = [
    {id: 1, messeges: "Lorem data", age: 20, likeCount: 2},
    {id: 2, messeges: "HLorem from", age: 210, likeCount: 75},
] */

let postsElements = props.posts.map ( (p, i) => <Post key={i} messeges={p.messeges} age={p.age} likeCount={p.likeCount}/>)
  return (
    <div>
      <h3>My posts</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      <div className={Myposts.items}>
      {postsElements}
      </div>
  </div>
  )
}

export default MyPosts;