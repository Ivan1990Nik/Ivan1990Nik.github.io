import React from "react"
import dialog from "./Messages.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

  let newPostElement = React.createRef();

let addMessags = () => {
  let text = newPostElement.current.value;
  alert(text);
}



  let dialogsElements = props.state.dialogs.map((d, i) => < DialogItem key={i} name={d.name} id={d.id} />)
  let messagesElement = props.state.messages.map((m, i) => <Message key={i} message={m.message} />
  )
  return (
    <div className={dialog.dialogs}>
      <div className={dialog.dialogs__items}>
        <span className={dialog.header}>Dialogs</span>
        {dialogsElements}
      </div>
      <div className={dialog.messages}>
        <span className={dialog.header}>Messages</span>
        {messagesElement}
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={ addMessags }>add messags</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;