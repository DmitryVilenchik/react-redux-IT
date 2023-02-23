
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE';

let initialState={
    dialogData: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Elena"},
        {id: 3, name: "Dank"},
        {id: 4, name: "Ilya"}
    ],
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"}
    ],
    newDialogText: ""
}

const dialogsReducer=(state=initialState, action)=>{

    let stateCopy={
        ...state,
        //messagesData: [...state.messagesData]
    };


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newDialogText=action.body;
            return stateCopy;

        case SEND_MESSAGE:
            let body=stateCopy.newDialogText;
            stateCopy.newDialogText='';
            stateCopy.messagesData.push({id: 5, message: body});
            return stateCopy;

        default: return state;
    }

}
export const sendMessageCreator=()=>({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator=(body)=>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;