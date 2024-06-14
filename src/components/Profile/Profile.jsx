import React from 'react';
import profile from './Profile.module.css'
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={profile.content}>
        <ProfileInfo />
        <MyPosts />
    </div>
  )
}

export default Profile;