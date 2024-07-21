import React from 'react';
import Myposts from './Myposts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/preloader/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);



const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='coment' component={Textarea} name="MyPost"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const MyPostReduxform = reduxForm({ form: 'MyPost' })(MyPostForm);

const MyPosts = (props) => {
  let state = props.profilePage;

  let postsElements = state.posts.map((p, i) => <Post key={i} messeges={p.messeges} likesCount={p.likesCount} />)

  let onAdddPost = (values) => {
    props.addPost(values.MyPost);
  }

  return (
    <div>
      <h3>My posts</h3>
      <MyPostReduxform onSubmit={onAdddPost} />
      <div className={Myposts.items}>
        {postsElements}
      </div>
    </div>
  )
}




export default MyPosts;

