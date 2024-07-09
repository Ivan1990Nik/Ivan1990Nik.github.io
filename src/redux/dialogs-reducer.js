const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "ivan" },
    { id: 2, name: "Olga" },
    { id: 3, name: "Bogdan" },
    { id: 4, name: "Vladimir" },
    { id: 5, name: "Ruslan" },
    { id: 6, name: "Sasha" },
  ],
  messages: [
    { id: 1, message: "hi" },
    {
      id: 2, message: "How is affairs olga" },
    { id: 3, message: "Yo" },
  ],
  newMessageBody: ""
}


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body
      }
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 4, message: body }]
      }
    }
    default:
      return state
  }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;
