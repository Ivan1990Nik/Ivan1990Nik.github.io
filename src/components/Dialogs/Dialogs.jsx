import React from "react"
import dialog from "./Messages.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators";



const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d, i) => < DialogItem key={i} name={d.name} id={d.id} />)
  let messagesElement = state.messages.map((m, i) => <Message key={i} message={m.message} />)



  let DialogAdd = (values) => {
    props.sendMessage(values.Dialogs);
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
      <DialogsReduxform onSubmit={DialogAdd}/>
        </div>
      </div>
    </div>
  )
}

const maxlength10 = maxLengthCreator(10);
/* const minlength2 = minLengthCreator(2); */

const DialogsMessagesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'messags'} component={"textarea"} name={"Dialogs"} 
        validate={[required, maxlength10/* , minlength2  */]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}
const DialogsReduxform = reduxForm({ form: 'Dialogs' })(DialogsMessagesForm);

export default Dialogs;