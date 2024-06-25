import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContaine';
import UsersContainer from './components/Users/UsersContainer';



const App = () => {
  return (
    <div className='app-wraper'>
      <Header />
      <Navbar />
      <div className='app-wraper-content'>
        <Routes >
          <Route path="/News" Component={News} />
          <Route path="/Profile" element={ <Profile />} />
          <Route path="/*" element={ <DialogsContainer/>} />
          <Route path="users" element={ <UsersContainer /> } />
        </Routes>
      </div>
    </div >
  )
};
export default App;

