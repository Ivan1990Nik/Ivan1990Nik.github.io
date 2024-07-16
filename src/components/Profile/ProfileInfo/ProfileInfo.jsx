import React from 'react';
import profile from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }


  return (
    <div >
      {/* <div className={profile.content}>
          <img alt="" src="https://kartinki.pics/uploads/posts/2021-03/thumbs/1616115428_4-p-vesna-krasivie-foto-5.jpg"/>
        </div> */}
      <img src={props.profile.photos.large} alt="" />
      <ProfileStatus status={props.status}/>
    </div>

  )
}

export default ProfileInfo;