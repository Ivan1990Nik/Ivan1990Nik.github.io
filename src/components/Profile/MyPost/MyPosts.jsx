import React from 'react';
import Myposts from './Myposts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

let postData = [
    {id: 1, messeges: "Lorem data", age: 20, likeCount: 2},
    {id: 2, messeges: "HLorem from", age: 210, likeCount: 75},
    {id: 3, messeges: "Lorem ipsum", age: 204, likeCount: 152},
]

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
      <Post messeges={postData[0].messeges} age={postData[0].age} likeCount={postData[0].likeCount}/>
      <Post messeges={postData[1].messeges} age={postData[1].age} likeCount={postData[1].likeCount}/>
      <Post messeges={postData[2].messeges} age={postData[2].age} likeCount={postData[2].likeCount}/>
      </div>
  </div>
  )
}

export default MyPosts;