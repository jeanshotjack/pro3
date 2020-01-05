import React from "react";

const Login = (props) => {
  return (

  <div className="form-row">
    <div className="col">
      <input type="text" onChange ={props.handleUserInput} className="form-control" placeholder="User Name" />
    </div>
    <div className="col">
      <input type="password" onChange ={props.handlePasswordInput} className="form-control" placeholder="password" />
    </div>
    <button onClick={props.handleLogin}> BUTTON TO CLICK </button>
  </div>

  );
}

export default Login;