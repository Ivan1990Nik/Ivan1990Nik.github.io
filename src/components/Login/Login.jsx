import React from "react";
/* import Loginform from "./Loginform"; */
/* import LoginReduxform from "./Loginform"; */

import { Field, reduxForm } from 'redux-form';
import { Input } from "../common/preloader/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";


const Loginform = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"}
          component={Input}
          name={"email"}
          validate={required} />
      </div>
      <div>
        <Field placeholder={"Password"}
          name={"password"}
          type={"password"}
          validate={required}
          component={Input} />
      </div>
      <div>
        <Field type={"checkbox"} component={Input} name={"rememberMe"} /> remember me
      </div>
      <div>
        <button>Login
        </button>
      </div>
    </form>
  )
}

const LoginReduxform = reduxForm({ form: 'login' })(Loginform);


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)

  }
  if(props.isAuth) {
    return <Navigate to={"/profile"} />
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxform onSubmit={onSubmit} />
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);