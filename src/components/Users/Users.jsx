import React from "react";
import styles from "./users.module.css"
import users from "../../assets/images/users.png"
import Preloader from "../common/preloader/preloader";
import { NavLink } from "react-router-dom";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div className={styles.wraper}>
    {props.users.map((u, i) => <div className={styles.inner}
      key={i}>
      <div>
        <div >
          <NavLink to={"/profile/" + u.id}>
            <img src={u.photos.small != null ? u.photos.small : users} alt="" className={styles.ava} />
            </NavLink >
        </div>
        <div >
          {u.followed
            ? <button className={styles.button} onClick={() => { props.unfollow(u.id) }}>unfollow</button > : <button onClick={() => { props.follow(u.id) }}>follow</button>}
        </div>
      </div>
      <div className={styles.items}>
        <div>
          <div className={`${styles.item} ${styles.color}`}>{u.name}</div>
          <div>{u.status != null ? u.status : "ia boss"}</div>
        </div>
        <div className={styles.location}>
          <div className={styles.item}>{"u.location.city"}</div>
          <div>{"u.location.country"}</div>
        </div>

      </div>
    </div>)}
    <div className={styles.countPage}>
      {pages.map((p, i) => {
        return <span key={i} className={props.currentPage === p && styles.page} onClick={(e) => { props.onPageChanged(p); }} >{p}</span>
      })}
      <div className={styles.preloader}> {props.isFetching ? <Preloader /> : null} </div>
    </div>
  </div>
}

export default Users;
