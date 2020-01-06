import React from "react";

const ProfilePage = (props) => {
    return (


        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">                      
                        <div className="card-header" align="center">Welcome Nox Member</div>
                        <br></br>

                        <div align="center">
                        <img className="profileLogo" src={require("../ProfilePage/profile.png")} />


                        </div>
                       
                        <div className="card-body"></div>

                    </div>
                </div>
            </div>
        </div >
    );
}



export default ProfilePage;