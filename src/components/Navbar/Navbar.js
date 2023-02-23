import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar=()=> {
    return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile/" className={classes.activeLink}>Profile</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
    <NavLink to="/dialogs/" className={classes.activeLink}>Messages</NavLink>
    </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/users/" className={classes.activeLink}>Users</NavLink>
        </div>
    <div className={`${classes.item}`}>
    <NavLink to="/news/">News</NavLink>
    </div>
    <div className={classes.item}>
    <NavLink to="/music">Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  </nav> ;
}

export default Navbar;