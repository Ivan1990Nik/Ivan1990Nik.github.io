import React from "react";
/* import Loginform from "./Loginform"; */
/* import LoginReduxform from "./Loginform"; */

import { Field, reduxForm } from 'redux-form';


const Loginform = (props) => {
  return ( 
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={"Login"} component={"input"} name={"Login"} />
    </div>
    <div>
      <Field placeholder={"Password"} component={"input"} name={"Password"}/>
    </div>
    <div>
      <Field type={"checkbox"} component={"input"} name={"RememberMe"}/> Remember Mi
    </div>
    <div>
      <button>Login
      </button>
    </div>
  </form>
  )
}

const LoginReduxform = reduxForm({ form: 'login' })(Loginform);

const onSubmit = (formData) => {
console.log(formData)
}

const Login = (props) => {
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxform onSubmit={onSubmit}/>
  </div>
}


export default Login;