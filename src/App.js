import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';

import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';



const App = (props) => {
  return (
    <div className='app-wraper'>
      <Header />
      <Navbar />
      <div className='app-wraper-content'>
        <Routes >
          <Route path="/News" Component={News} />

          <Route path="/Profile" element={<Profile
            state={props.state.profilePage} />} />

          <Route path="/*" Component={() => <Dialogs
            state={props.state.dialogsPage}
          />} />

        </Routes>
      </div>
    </div >
  )
};
export default App;

