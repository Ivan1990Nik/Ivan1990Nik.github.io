import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPost/MyPostsC0ntainer';





const Profile = (props) => {
  return (
    <div >
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;