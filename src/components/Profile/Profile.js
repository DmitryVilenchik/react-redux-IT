import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile=(props)=>{

  return (
    <div>
    <ProfileInfo profile={props.profile} status={props.status} updateSatus={props.updateStatus}/>
    <MyPostsContainer />
    </div>    
    ); 
}

export default Profile;