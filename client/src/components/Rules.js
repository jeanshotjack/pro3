import React from "react";

const Signup = (props) => {
    return (


        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <a><img className="noxRulesLogo center" src={require("../components/NoxLogo/Nox2.png")} /></a>
                    <hr />
                    <h6>
                        <p>Nox is a dating and social app designed for the queer people of marginalized genders. There are many dating app options for cis gay men and cis straight couples. Please respect this space and the persons frequenting it.

                </p>

                        <p> No transphobia, racism, hate speech, ableism, or fatphobia.
                    If your content is found offensive enough to be flagged 3 or more times by members of our community, it will be automatically deleted.
            </p>
                    </h6>
                </div>
            </div>
        </div >
    );
}



export default Signup;
