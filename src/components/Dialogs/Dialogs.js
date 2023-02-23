import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs=(props) => {

    let state=props.messagesPage;

    let dialogsElements=state.dialogData.map((el) => <DialogItem name={el.name} key={el.id} id={el.id}/>);
    let messagesElements=state.messagesData.map((el) => <Message message={el.message} key={el.id}/>);

    let newMessageBody=state.newDialogText;

    let onSendMessageClick=()=>{
        props.sendMessage();
    }

    let onNewMessageChange=(e)=>{
       let body=e.target.value;
       props.updateNewMessageBody(body);

       }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
           <div className={s.messages}>
               <div>{messagesElements}</div>
               <div>
                   <div>
                   <textarea placeholder='Enter your message'
                             onChange={onNewMessageChange}
                             value={newMessageBody}></textarea>
                   </div>
                   <div>
                   <button onClick={ onSendMessageClick }>Send</button>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Dialogs;