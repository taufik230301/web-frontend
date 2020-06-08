import React from "react";
import "./sponsor.css";

const Sponsor = (props) =>{
    return(
        <div id="sponsor" className="sponsorbox">
            <div className="centerr">
                
            <a href={props.site}><img src={props.logo} width="100px" alt="logo_sponsor"/></a>

            </div>
        </div>
    )
}

export default Sponsor;