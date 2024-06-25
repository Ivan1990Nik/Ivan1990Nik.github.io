import React from "react";
import styles from "./users.module.css"


let Users = (props) => {
  return <div>
    {props.users.map((u, i) => <div
      key={i}>
      <div>
        <div > 
        <img src={u.photoUrl} alt="" className={styles.ava}/>
        </div>
        <div>
          <button>
            follow
          </button>
        </div>
      </div>

      <div>
        <div>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
        </div>
        <div>
          <div>{u.location.city}</div>
          <div>{u.location.country}</div>
        </div>
      </div>
    </div>)}
  </div>
}



export default Users;