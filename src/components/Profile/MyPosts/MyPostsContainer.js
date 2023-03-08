import React from "react";
//import s from './MyPosts.module.css';
//import Post from "./Post/Post";
import {addPostActionCreator} from './../../../redux/profile-reducer';
//import {updateNewPostTextActionCreator} from './../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
//import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

//const MyPostsContainer=(props)=>{
//    return (
//        <StoreContext.Consumer>
//            {(store)=> {
//                let state=store.getState();
//                let addPost=()=> {
//                    store.dispatch(addPostActionCreator());


//                }
//                let onPostChange=(text)=>{
//                    let action=updateNewPostTextActionCreator(text);
//                    store.dispatch(action);
//                }
//                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                                postsData={store.getState().profilePage.postsData}
//                                newPostText={store.getState().profilePage.newPostText}/>
//            }
//        }
//        </StoreContext.Consumer>
//    );
//}

const mapStateToProps=(state)=>{
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispathToProps=(dispatch)=>{
    return {

        addPost: (newPostText)=>{dispatch(addPostActionCreator(newPostText));

        }
    }

}
const MyPostsContainer=connect(mapStateToProps, mapDispathToProps)(MyPosts);
export default MyPostsContainer;