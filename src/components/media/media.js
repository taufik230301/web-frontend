import React from "react";
import MediaStyles from "./media.module.css";
import OverFlow from "../../../assets/styles/overflow.module.css"
import { Container, Row, Col } from "reactstrap";


function MediaList(){
    const names = [ 'https://i.ibb.co/cXt1dXF/IDNTIMES.png',
                    'https://i.ibb.co/qs6fGCQ/TRIBUNSUMSEL.png',
                    'https://i.ibb.co/JmM6FfL/SUMEKS.png',
                    'https://i.ibb.co/7nts4xq/SRIPOKU.png',
                    'https://i.ibb.co/hFbTH9z/RMOLSUMSEL.png',
                    'https://i.ibb.co/60gR678/PERISTIWABANGSA.png',
                    'https://i.ibb.co/ykqk1Hx/mutiaraindotv.png',
                    'https://i.ibb.co/b17dpQr/MANABERITA.png',
                    'https://i.ibb.co/Rb7QG24/KAGANGA.pngswNPj',
                    'https://i.ibb.co/jr7KJMj/INFOSEMPURNA.png',
                    'https://i.ibb.co/KXk4NsJ/SUARASUMSEL.png']
    return (
        <div className={`${MediaStyles["containers"]}`}>
            <h1 className={`${MediaStyles["title"]}`}>Liputan Media</h1>
        <div className={`${MediaStyles["container"]} `}>
            
            <Row className={`${OverFlow["overFlow"]} ${MediaStyles["box"]} ${MediaStyles["centerMargin"]}`}> 
                {   names.map(name => 
                    <Col className={`${MediaStyles["img"]} `}>
                        <div  >
                            <img src={name} width="150px" alt="logo_sponsor"/>
                        </div>
                    </Col>
                    )
                }
            </Row>
        </div>
        </div>
    );
}

export default MediaList