import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users=({currentPage, totalUserCount, pageSize, onPageChanged, users, ...props})=>{

    return <div>
        {/*  <div>
            {pages.map(p=> {return <span className={props.currentPage===p && styles.selectedPage} onClick={(e)=>{
                props.onPageChanged(p)}}>{p}</span>})}

        </div> */}
        < Paginator currentPage={props.currentPage} onPageChanged={onPageChanged} totalUserCount={totalUserCount}
                   pageSize={pageSize} />
        <div>
        {users.map(u => <User user={u}
                              key={u.id}
                              followingInProgress={props.followingInProgress}
                              unfollow={props.unfollow}
                              follow={props.follow} />)


        }
        </div>
    </div>
}

export default Users;