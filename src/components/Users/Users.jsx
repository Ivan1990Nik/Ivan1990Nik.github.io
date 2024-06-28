import React from "react";
import styles from "./users.module.css"
import users from "../../assets/images/users.png"
import axios from "axios";


class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
    /*     this.props.setTotalUsersCount(response.data.totalCount); */
    // коммент: все пользователи соц.сети.
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
 
  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div className={styles.wraper}>
      <div>
        {pages.map((p, i) => {
          return <span key={i} className={this.props.currentPage === p && styles.page} onClick={(e) => {this.onPageChanged(p); }} >{p} </span>
        })}
      </div>
      {this.props.users.map((u, i) => <div className={styles.inner}
        key={i}>
        <div>
          <div >
            <img src={u.photos.small != null ? u.photos.small : users} alt="" className={styles.ava} />
          </div>
          <div >
            {u.followed
              ? <button className={styles.button} onClick={() => { this.props.unfollow(u.id) }}>unfollow</button > : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
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
    </div>
  }
}



export default Users;
