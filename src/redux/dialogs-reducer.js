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
}


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.sendMessage;
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: body }]
      }
    }
    default:
      return state
  }
}


export const sendMessageCreator = (sendMessage) => ({ type: SEND_MESSAGE, sendMessage })
export default dialogsReducer;
