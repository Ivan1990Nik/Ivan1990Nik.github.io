import React from 'react';
import profile from './Profile.module.css'
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';





const Profile = (props) => {
  return (
    <div >
      <ProfileInfo />
      <MyPosts
        dispatch={props.dispatch}
        store={props.store}
        />
    </div>
  )
}

export default Profile;