import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
//import {addPostActionCreator} from './../../../redux/profile-reducer';
//import {updateNewPostTextActionCreator} from './../../../redux/profile-reducer';

const MyPosts=(props)=>{


    let postsItems=props.postsData.map((el) => <Post message={el.message} key={el.id} likesCount={el.likesCount} />)
    let newPostElement=React.createRef();
    

    let onAddPost=()=> {
       //let text: string=newPostElement.current.value;
      //props.dispatch(addPostActionCreator());
      props.addPost();

    }
    let onPostChange=()=>{
      let text=newPostElement.current.value;
      //let action=updateNewPostTextActionCreator(text);
      //props.dispatch(action);
        props.updateNewPostText(text);
    } 
          
    return (    
    <div className={s.postsBlock}>
        <h3>My Post</h3>
        <div>
          <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
          </div>
          <div>
        <button onClick={ onAddPost }>Add post</button>
          </div>
          </div>
      <div className={s.posts}>
       {postsItems}       
      </div>
    </div>    
    );
}

export default MyPosts;