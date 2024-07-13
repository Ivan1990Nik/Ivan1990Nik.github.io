import Dialogs from "./Dialogs";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}
/* 
compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
) (Dialogs) */

/* let AuthRedirectConponent = withAuthRedirect(Dialogs) 


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectConponent) */



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
) (Dialogs)