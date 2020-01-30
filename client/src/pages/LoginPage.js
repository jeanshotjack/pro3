import React from "react";
<<<<<<< HEAD
import NoxRules from "../components/NoxLogo/NoxRules";

=======
import Form from 'react-bootstrap/Form';
>>>>>>> f8508493f52fe39cfbe2e6e73476335af3729e21

function Login(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4" align="left">
        <NoxRules 
        height="100vh"
        dpr="auto"
        responsive
        width="auto"
        crop="scale"
        responsiveUseBreakpoints="true"
        />
        </div>
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
            <div>
              <p>Don't have an account? Click here to <a href="/signup" value="/signup">sign up</a></p>
            </div>
          </div>
        </div>
        </div>
      </div>

  );
}

export default Login;