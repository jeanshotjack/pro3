import React from "react";

const Signup = (props) => {
  return (


    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="signUpCard">
            <div className="header" align="center"><h3>Sign Up</h3></div>
            <div className="box"></div>

            <form onSubmit>
              <div className="form-row">

                <div className="form-group">
                  <div className="col">
                    <input type="email" value ={props.email} onChange={props.handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <input type="text" value ={props.username} onChange={props.handleUser}  className="form-control" placeholder="User Name" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <input type="password" value ={props.password} onChange={props.handlePassword} className="form-control" placeholder="password" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <input type="password" value ={props.confirm} className="form-control" onChange={props.handleConfirm} placeholder="confirm password" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <input type="text" value ={props.gender} onChange={props.gender}  className="form-control" placeholder="Gender" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <input type="text" value ={props.DOB} onChange={props.DOB}  className="form-control" placeholder="Date of Birth" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <input type="text" value ={props.social} onChange={props.social}  className="form-control" placeholder="Social Media" />
                </div>
              </div>

              <div className="form-group">
                <div className="col">
                  <button onClick={props.onClick}> Submit </button>
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
