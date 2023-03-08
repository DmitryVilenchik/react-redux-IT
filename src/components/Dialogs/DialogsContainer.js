import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps=(state)=>{
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispathToProps=(dispatch)=>{
    return {
        sendMessage: (newMessageBody)=>{dispatch(sendMessageCreator(newMessageBody));
        }
            }
}
const DialogsContainer=
compose(
    connect(mapStateToProps,mapDispathToProps),
    withAuthRedirect
)(Dialogs);

//let AuthRedirectComponent=withAuthRedirect(Dialogs);

//const DialogsContainer=connect(mapStateToProps,mapDispathToProps)(AuthRedirectComponent);

export default DialogsContainer;