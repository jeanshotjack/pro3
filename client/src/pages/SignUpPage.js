import React from "react";

const Signup = (props) => {
  return (


    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header" align="center">Sign Up</div>
            <div className="card-body"></div>

            <form onSubmit>
              <div className="form-row">

                <div className="form-group">
                  <div className="col">
                    <input type="email" onChange={props.handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <input type="text" onChange={props.handleUser} className="form-control" placeholder="User Name" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <input type="password" onChange={props.handlePassword} className="form-control" placeholder="password" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <input type="password" className="form-control" onChange={props.handleConfirm} placeholder="confirm password" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <button type="submit"> Submit </button>
                </div>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div >
  );
}



export default Signup;
