import React from "react"
import dialog from "./Messages.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;


  let dialogsElements = state.dialogs.map((d, i) => < DialogItem key={i} name={d.name} id={d.id} />)
  let messagesElement = state.messages.map((m, i) => <Message key={i} message={m.message} />)

  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  }
  let onNewdMessageChenge = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={dialog.dialogs}>
      <div className={dialog.dialogs__items}>
        <span className={dialog.header}>Dialogs</span>
        {dialogsElements}
      </div>
      <div className={dialog.messages}>
        <span className={dialog.header}>Messages</span>
        <div>{messagesElement}</div>
        <div className={dialog.textarea}>
          <div>
            <textarea onChange={onNewdMessageChenge}
              value={newMessageBody}></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>messags</button>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Dialogs;