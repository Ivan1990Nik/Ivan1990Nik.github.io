import React from "react"
import messeges from "./Messeges.module.css"
import { NavLink } from "react-router-dom";


const navActiv = ({ isActive }) => (isActive ? messeges.nev__active : messeges.defolt)

const DialogItem = (props) => {
  return (
    <div className={messeges.dialogs__item}>
          <NavLink to={"/Dialogs/" + props.id} className={navActiv}>{props.name}</NavLink>
        </div> 
  )
}
const Messege = (props) => {
  return (
    <div className={messeges.messeg}>{props.messege}</div>
  )
}
  const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: "ivan"},
    {id: 2, name: "Olga"},
    {id: 3, name: "Bogdan"},
    {id: 4, name: "Vladimir"},
    {id: 5, name: "Ruslan"},
  ]

  let messegesData = [
    {id: 1, messege: "hi"},
    {id: 2, messege: "How is your olga"},
    {id: 3, messege: "Yo"},
  ]
  return (
    <div className={messeges.dialogs}>
      <div className={messeges.dialogs__items}>
        <span className={messeges.header}>Dialogs</span>
        < DialogItem  name={dialogsData[0].name} id={dialogsData[0].id}/>
        < DialogItem  name={dialogsData[1].name} id={dialogsData[1].id}/>
        < DialogItem  name={dialogsData[2].name} id={dialogsData[2].id}/>
        < DialogItem  name={dialogsData[3].name} id={dialogsData[3].id}/>
        < DialogItem  name={dialogsData[4].name} id={dialogsData[4].id}/>


      </div>
      <div className={messeges.messeges}>
        <span className={messeges.header}>Messeges</span>
        <Messege messege={messegesData[0].messege}/>
        <Messege messege={messegesData[1].messege}/>
        <Messege messege={messegesData[2].messege}/>
        <Messege messege={messegesData[2].messege}/>
        <Messege messege={messegesData[2].messege}/>
      </div>
    </div>
  )
}

export default Dialogs;