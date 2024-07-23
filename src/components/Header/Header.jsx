import React from 'react';
import header from './Header.module.css'
import { NavLink } from 'react-router-dom';


// let activLinC = ({isActive}) => (isActive ? header.loginn : header.defolt)

const Header = (props) => {
  return (
    <header className={header.header}>
        <img alt="#" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7fTFb3G8JZJy_oWg4rfoketLxdUnUF2eLw&usqp=CAU" />
        <div className={header.login}>
          {props.isAuth 
          ? <div>{props.login} - <button onClick={props.logout}>Log aut</button></div>
          : <NavLink to={"/login/"} >login</NavLink> }

        </div>

      </header>
  )
}

export default Header;