import React from 'react';
import Myposts from './Myposts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';


const MyPosts = (props) => {
  let state = props.profilePage;

  let postsElements = state.posts.map((p, i) => <Post key={i} messeges={p.messeges} likesCount={p.likesCount} />)

  let dsd = (values) => {
    props.addPost(values.MyPost);
  }

  return (
    <div>
      <h3>My posts</h3>
      <MyPostReduxform onSubmit={dsd} />
      <div className={Myposts.items}>
        {postsElements}
      </div>
    </div>
  )
}

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'coment'} component={"textarea"} name={"MyPost"} />
      </div>
      <div>
        <button  >Add post</button>
      </div>
    </form>
  )
}
const MyPostReduxform = reduxForm({ form: 'MyPost' })(MyPostForm);


export default MyPosts;