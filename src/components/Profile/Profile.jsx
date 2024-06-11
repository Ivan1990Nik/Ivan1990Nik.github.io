import React from 'react';
import profile from './Profile.module.css'
import MyPosts from './MyPost/MyPosts';

const Profile = () => {
  return (
    <div className={profile.content}>
        <div>
          <img alt="" src="https://kartinki.pics/uploads/posts/2021-03/thumbs/1616115428_4-p-vesna-krasivie-foto-5.jpg"/>
        </div>
        <div>Ava + Description
        </div>
        <MyPosts />
    </div>
  )
}

export default Profile;