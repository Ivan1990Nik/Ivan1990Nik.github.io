import React from 'react';
import post from './post.module.css'

const Post = (props) => {
  return (
        <div >
          <div className={post.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgdqRdSeu3HI4DQ2M9gh8BxM1ZVw2uqRE_g&usqp=CAU" alt="" /> {props.messeges} {props.age} 
            </div>
            <div className={post.like}>
              <span> like - {props.likeNumber}</span>
            </div>
        </div>
  )
}

export default Post;