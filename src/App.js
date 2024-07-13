import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContaine';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



const App = () => {
  return (
    <div className='app-wraper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wraper-content'>
        <Routes >
          <Route path="/News" Component={News} />
          <Route path="/profile" element={<ProfileContainer />}>
        <Route path=":userId" element={<ProfileContainer />} />
      </Route>
          {/* <Route path="/Profile/*" element={ <ProfileContainer />} /> */}
          <Route path="/Dialogs/*" element={ <DialogsContainer/>} />
          <Route path="/users" element={ <UsersContainer /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </div>
    </div >
  )
};
export default App;

