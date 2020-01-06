import React from "react";

function Login(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header" align="center">Login</div>
            <div className="card-body"></div>
            <form>

              <div class="form-row">
                <div class="col">
                  <input type="text" onChange = {props.handleUserInput} className="form-control" placeholder="User Name" />
                </div>
                <div class="col">
                  <input type="password" onChange = {props.handlePasswordInput} className="form-control" placeholder="password" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <button onClick = {props.OnClick}> Submit </button>
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