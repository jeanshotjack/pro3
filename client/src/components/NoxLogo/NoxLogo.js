import React from "react";


const NoxLogo = (props) => {
  return (

    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8"></div>
          <img className="noxLogo" src={require("../NoxLogo/noxLogoMain.png")} />
        </div>
      </div>
    </div>
  );
}



export default NoxLogo;