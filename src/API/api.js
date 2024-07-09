
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
  }
}
export const followAPI = {
  followUsers(id) {
    return instance.delete(`/follow/${id}`)
    .then(Response => {
      return Response.data;
    });
  },
  unfollowUsers(id) {
    return instance.post(`/follow/${id}`)
  .then(Response => {
    return Response.data;
  });
  }
}
export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
    .then(Response => {
        return Response.data;
      });
  }
}



