import React from "react"
import dialog from "./../Messages.module.css"



const Message = (props) => {
  return (
    <div className={dialog.messag}>{props.message}</div>
  )
}


export default Message;