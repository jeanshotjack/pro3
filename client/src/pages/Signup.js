import React from "react";

function Signup() {
  return (
<form>
  <div class="form-row">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
    <div class="col">
      <input type="text" className="form-control" placeholder="User Name" />
    </div>
    <div class="col">
      <input type="password" className="form-control" placeholder="password" />
    </div>
    <div class="col">
      <input type="password" className="form-control" placeholder="confirm password" />
    </div>
  </div>
</form>
  );
}

export default Signup;