
import axios from "axios";



const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "084f30d2-4614-4f7e-a605-af4533d75820"
  }
});

export const usersAPI = {
   
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
      .then(Response => {
        return Response.data;
      });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
    .then(Response => {
      return Response.data;
    });
  },
  follow(id) {
    return instance.post(`follow/${id}`)
    .then(Response => {
      return Response.data;
    });
  },
  /* getProfile(userId) {
    return instance.get(`profile/${userId}`)
    .then(Response => {
      return Response.data;
    });
  } */
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
    .then(Response => {
      return Response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
    .then(Response => {
      return Response.data;
    });
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status: status} )
    .then(Response => {
      return Response.data;
    });
  },

}
export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
    .then(Response => {
        return Response.data;
      });
  }
}



