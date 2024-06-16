import React from 'react';
import Myposts from './Myposts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map((p, i) => <Post key={i} messeges={p.messeges} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();

  }
  let onPostChenge = () => {
    let text = newPostElement.current.value;
    props.updeteNewPostText(text);
  }


  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChenge}
          ref={newPostElement}
          value={props.newPostText} />
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