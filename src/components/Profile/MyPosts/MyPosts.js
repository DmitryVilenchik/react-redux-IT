import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/vilidators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
//import {addPostActionCreator} from './../../../redux/profile-reducer';
//import {updateNewPostTextActionCreator} from './../../../redux/profile-reducer';

const MyPosts=(props) => {

    let postsItems = props.postsData.map((el) => <Post message={el.message} key={el.id}
                                                       likesCount={el.likesCount}/>)
    let newPostElement = React.createRef();


    let onAddPost = (values) => {
        //let text: string=newPostElement.current.value;
        //props.dispatch(addPostActionCreator());
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
}

const maxLength=maxLengthCreator(10);

let addNewPostForm=(props)=>{
   return (
       <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newPostText"} placeholder={"Text message"}
            validate={[required, maxLength]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
   )
}

let AddNewPostFormRedux=reduxForm({form: "ProfileAddNewPostForm"})(addNewPostForm);
export default MyPosts;