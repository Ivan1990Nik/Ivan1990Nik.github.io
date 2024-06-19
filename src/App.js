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
          store={props.store}
            dispatch={props.dispatch} />} />

          <Route path="/*" element={ <Dialogs
            store={props.store}
            dispatch={props.dispatch}
          />} />

        </Routes>
      </div>
    </div >
  )
};
export default App;

