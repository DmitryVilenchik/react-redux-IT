

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
    ]
}

const dialogsReducer=(state=initialState, action)=>{

    let stateCopy={
        ...state,
        //messagesData: [...state.messagesData]
    };


    switch (action.type) {

        case SEND_MESSAGE:
            let body=action.newMessageBody;
            stateCopy.messagesData.push({id: 5, message: body});
            return stateCopy;

        default: return state;
    }

}
export const sendMessageCreator=(newMessageBody)=>({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;