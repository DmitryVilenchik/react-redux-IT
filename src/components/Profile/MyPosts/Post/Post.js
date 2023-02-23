import React from "react";
import s from './Post.module.css';

const Post=(props)=>{
  //console.log(props.message);
  //debugger;
    return (      
        <div className={s.item}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQ6I7mPbttUzHkoGqV77RTA9RHhw9mUJu5g&usqp=CAU'></img>
          {props.message}
          <div>
          <span>
            {props.likesCount}
          </span>
          </div>
        </div>      
    ); 
}

export default Post;