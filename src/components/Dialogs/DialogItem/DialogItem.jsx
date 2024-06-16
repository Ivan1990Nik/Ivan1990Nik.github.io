import React from "react"
import dialog from "./../Messages.module.css"
import { NavLink } from "react-router-dom";


const navActiv = ({ isActive }) => (isActive ? dialog.nev__active : dialog.defolt)

const DialogItem = (props) => {
  return (
    <div className={dialog.dialogs__item}>
      <div >
        <img className={dialog.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO448xC0Ek_fl3UMZY5slPjNDptBhajLvVLw&usqp=CAU" alt="" />
      </div>
      <NavLink to={"/Dialogs/" + props.id} className={navActiv}>{props.name}</NavLink>
    </div>
  )
}


export default DialogItem;