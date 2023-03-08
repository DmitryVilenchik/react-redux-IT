import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {required, maxLengthCreator,} from "../../utils/vilidators/validators";


const Dialogs=(props) => {

    let state=props.messagesPage;

    let dialogsElements=state.dialogData.map((el) => <DialogItem name={el.name} key={el.id} id={el.id}/>);
    let messagesElements=state.messagesData.map((el) => <Message message={el.message} key={el.id}/>);

    let newMessageBody=state.newDialogText;


    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody);
    }

      if (!props.isAuth) {return <Navigate to="/login"/>;}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
           <div className={s.messages}>
               <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}
const maxLength50=maxLengthCreator(50);
const AddMessageForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"}
                       placeholder={"Enter your message"} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux=reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;