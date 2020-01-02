import React from "react";

  const Signup = (props) => {
    return (
  <form>
    <div className="form-row">
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" onChange ={props.handleUsername} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
      <div className="col">
        <input type="text" onChange ={props.handlePassword} className="form-control" placeholder="User Name" />
      </div>
      <div className="col">
        <input type="password" onChange ={props.handleConfirm} className="form-control" placeholder="password" />
      </div>
      <div className="col">
        <input type="password" className="form-control" placeholder="confirm password" />
      </div>
    </div>
  </form>
    );
  }

  
  
export default Signup