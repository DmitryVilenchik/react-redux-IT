import React from "react";
import s from './News.module.css'
import styles from "../News/News.module.css";

let News=(props) => {
   let newsItems=props.news.map(u=> <div key={u.id}>
       {u.fullName}<>***</>{u.department}<>***</>
       {u.salary}<>***</>{u.BirthDay}<>***</>
       {u.location.country}<>***</>{u.location.city}</div>)
   let onAddNews=()=>{
       props.addNews();
   }
    return (
        <div>
            {newsItems}
            <div>
                <button onClick={onAddNews}>Add news</button>
            </div>
        </div>
    )
}

export default News;