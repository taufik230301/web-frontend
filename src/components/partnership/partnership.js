import React from "react"
import "./partnership.css"
import Sponsor from "../sponsor/sponsor"
import {Container, Row, Col} from 'reactstrap';
import logoMO from "../../images/logomyo_.png"
class Partnership extends React.Component{
    render(){
        return( 
        <div id="partnership">
            <div class="boxsponsor">   
                <Container className="themed-container" fluid="sm">
                <div>
                    <h1>Kerjasama kami bersama</h1>
                </div>
                <Row className="partnership">
                    <Col>
                    <Sponsor site="https://sriwijayahost.id" logo="https://sriwijayahost.id/wp-content/uploads/2018/09/sriwijaya-logo-border-putih.png"/>
                    </Col>
                    <Col>
                    <Sponsor site="https://my-office.co.id" logo={logoMO}/>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
            
        )
    }
}

export default Partnership;