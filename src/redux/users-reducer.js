const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";



let initialState = {
  users: [
    { id: 1,photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS151J63_ianQLfkTxq-rAzokYRXXOjJe435Q&usqp=CAU", followed: false, fullName: "ivan", status: "i am a boss", location: { city: "krasnodar", country: "Russia" } },
    { id: 2,photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS151J63_ianQLfkTxq-rAzokYRXXOjJe435Q&usqp=CAU", followed: true, fullName: "Olga", status: "i am a boss", location: { city: "tumen", country: "Russia" } },
    { id: 3,photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS151J63_ianQLfkTxq-rAzokYRXXOjJe435Q&usqp=CAU", followed: false, fullName: "Bogdan", status: "i am a boss", location: { city: "moscov", country: "Russia" } },
  ]
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        })
      }
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users ]}
    }

    default:
      return state;
  }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;