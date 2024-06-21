import React from "react"
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";



const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewdMessageChenge = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <Dialogs
      updateNewMessageBody={onNewdMessageChenge}
      sendMessage={onSendMessageClick}
      dialogsPage={state} />
  )
}
export default DialogsContainer;