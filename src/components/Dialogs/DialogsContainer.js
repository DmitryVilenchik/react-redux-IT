import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispathToProps=(dispatch)=>{
    return {
        sendMessage: ()=>{dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body)=>{dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer=connect(mapStateToProps,mapDispathToProps)(Dialogs);

export default DialogsContainer;