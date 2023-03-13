import React from "react";
import logo from './logo-my.jpg';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header=(props)=>{
    return <header className={s.header}>
    <img src={logo} />
        <div className={s.loginBlock}>
            {props.isAuth ?  (<div><div>{props.login} <button onClick={props.logout}>Log out</button></div><div>{props.email}</div></div>)
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
  </header>;
}

export default Header;