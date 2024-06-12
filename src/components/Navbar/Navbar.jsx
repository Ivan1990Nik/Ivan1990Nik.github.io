import React from 'react';
import navbar from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={navbar.navi}>
    <nav className={navbar.nav}>
        <div className={navbar.item}>
          <a href='/Profile'>Profile</a></div>
        <div className={navbar.item}>
          <a href='/Messeges'>Messeges</a></div>
        <div className={navbar.item}>
          <a href='/News'>News</a></div>
        <div className={navbar.item}>
          <a href='/navbar'>Music</a></div>
        <div className={navbar.item}>
          <a href='/Settings'>Settings</a></div>
      </nav>

      </div>
  )
}

export default Navbar;