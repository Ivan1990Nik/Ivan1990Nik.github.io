import React from 'react';
import post from './post.module.css'
import like_icon from "../../../../images/like_icon.svg"

const Post = (props) => {
  return (
    <div >
      <div className={post.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgdqRdSeu3HI4DQ2M9gh8BxM1ZVw2uqRE_g&usqp=CAU" alt="" /> {props.messeges}
      </div>
      <div className={post.like}>
        <img src={like_icon} alt="" />
        <span>   {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;