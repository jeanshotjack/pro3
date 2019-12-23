import React from "react";

function Login() {
  return (
    <form>
  <div class="form-row">
    <div class="col">
      <input type="text" className="form-control" placeholder="User Name" />
    </div>
    <div class="col">
      <input type="password" className="form-control" placeholder="password" />
    </div>
  </div>
</form>
  );
}

export default Login;