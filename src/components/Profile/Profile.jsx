import React from 'react';
import profile from './Profile.module.css'
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';





const Profile = (props) => {
  return (
    <div >
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        updeteNewPostText={props.updeteNewPostText}
        newPostText={props.profilePage.newPostText}
        />
    </div>
  )
}

export default Profile;