import React from "react";
import Form from 'react-bootstrap/Form';

function Login(props) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="loginCard">
            <div className="header" align="center"><h3>Login</h3></div>
              <Form.Control.Feedback type="invalid">
              Please provide a valid city.
              </Form.Control.Feedback>
            <div className="box"></div>
            <form>
              <div className="form-row">
                <div className="col">
                  <input type="text" onChange = {props.handleUserInput} className="form-control" placeholder="User Name" />
                </div>
                <div className="col">
                  <input type="password" onChange = {props.handlePasswordInput} className="form-control" placeholder="password" />
                </div>
              </div>
              <div align="center">{props.errorMessage}</div>
              <div className="form-group">
                <div className="col" align="center">
                  <button onClick = {props.OnClick}> Login </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;