import React, {useEffect, useState} from "react";
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

   let [count, setCount]=useState(0);

    return (
        <div>
            {newsItems}
            <div>
                <button onClick={onAddNews}>Add news</button>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        </div>
    )
}

export default News;