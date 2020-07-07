import React from "react";
import MediaStyles from "../media/media.module.css";
import OverFlow from "../../../assets/styles/overflow.module.css"
import SponsorsStyles from "./sponsor.module.css";
import { Container, Row, Col } from "reactstrap";


function Sponsors(){
    const names = [ {
                        "url": "/images/sponsors/sh.png",
                        "link": "https://sriwijayahost.id"
                    },
                    {
                        "url": "/images/sponsors/myo.png",
                        "link": "https://my-office.co.id"
                    },
                    {
                        "url": "/images/sponsors/AGT.png",
                        "link": "https://agt.co.id/"
                    }
                    ]
    return (
        <div className={`${MediaStyles["sponsor"]}`}>
            <h1 className={`${MediaStyles["title"]}`}>Kerjasama kami bersama</h1>
        <div className={`${MediaStyles["sponsor"]} `}>
            
            <Row className={`${OverFlow["overFlow"]} ${SponsorsStyles["box"]} ${MediaStyles["centerMargin"]}`}> 
                {   names.map(name => 
                    <Col className={`${MediaStyles["img"]} ${SponsorsStyles["container"]} `}>
                        <div className={`${SponsorsStyles["bgwhite"]} `}>
                            <a href={name.link} target="_blank" rel="noreferrer">
                                <img src={name.url} width="100px" alt="logo_sponsor"/>
                            </a>
                        </div>
                    </Col>
                    )
                }
            </Row>
        </div>
        </div>
    );
}

export default Sponsors