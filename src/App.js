import React, { Component } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import News from "./components/News/News";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContaine";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducery";
import Preloader from "./components/common/preloader/preloader";


class App extends Component  {
    componentDidMount() {
this.props.initializeApp();
}


render() {
if (!this.props.initialized) {
  return <Preloader />
}
  return (
    <div className="app-wraper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wraper-content">
        <Routes>
          <Route path="/News" Component={News} />
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route path="/Dialogs/*" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
};
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose ( 
/*   useLocation, */
  connect(mapStateToProps, {initializeApp}))(App);
