import React from 'react';
import profile from './Profile.module.css'

const Profile = () => {
  return (
    <div className={profile.content}>
        <div>
          <img alt="" src="https://kartinki.pics/uploads/posts/2021-03/thumbs/1616115428_4-p-vesna-krasivie-foto-5.jpg"/>
        </div>
        <div>Ava + Description
        </div>
        <div>My posts
          <div className={profile.items}>New post</div>
          <div className={profile.item}>post 1</div>
          <div className={profile.item}>post 2</div>
        </div>
    </div>
  )
}

export default Profile;