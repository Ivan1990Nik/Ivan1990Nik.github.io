import React from 'react';
import nav from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';

const linkActive = ({isActive}) => (isActive ? nav.activelink : nav.default);

const Navbar = () => {
  return (
    <div className={nav.navi}>
    <nav className={nav.nav}>
        <div className={nav.item}>
          <NavLink to='/Profile' className={linkActive}>Profile</NavLink></div>
        <div className={nav.item}>
          <NavLink to='/Dialogs' className={linkActive}>Messages</NavLink></div>
        <div className={nav.item}>
          <NavLink to='/News' className={linkActive}>News</NavLink></div>
        <div className={nav.item}>
          <NavLink to='/navbar' className={linkActive}>Music</NavLink></div>
        <div className={`${nav.item} ${nav.itemtwo}`}>
          <NavLink to='/Users' className={linkActive}>Users</NavLink></div>
        <div className={nav.item}>
          <NavLink /* to='/Settings' */to='/login' className={linkActive}>Settings</NavLink></div>
      </nav>

      </div>
  )
}

export default Navbar;