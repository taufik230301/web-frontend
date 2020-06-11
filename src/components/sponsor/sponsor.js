import React from "react";
import "./sponsor.css";

const Sponsor = (props) =>{
    return(
        <div id="sponsor" className="sponsorbox">
            <div className="centerr">
                
            <a href={props.site} target="_blank"><img src={props.logo} width="300px" alt="logo_sponsor"/></a>

            </div>
        </div>
    )
}

export default Sponsor;