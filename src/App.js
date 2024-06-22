import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContaine';



const App = (props) => {
  return (
    <div className='app-wraper'>
      <Header />
      <Navbar />
      <div className='app-wraper-content'>
        <Routes >
          <Route path="/News" Component={News} />

          <Route path="/Profile" element={<Profile
          /* store={props.store} *//>} />

          <Route path="/*" element={ <DialogsContainer
            /* store={props.store} *//>} />

        </Routes>
      </div>
    </div >
  )
};
export default App;

