import React from 'react';
import profile from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={profile.content}>
        <div>
          <img alt="" src="https://kartinki.pics/uploads/posts/2021-03/thumbs/1616115428_4-p-vesna-krasivie-foto-5.jpg"/>
        </div>
        <div>Ava + Description
        </div>
    </div>
  )
}

export default ProfileInfo;