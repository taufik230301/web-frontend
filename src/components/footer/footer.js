import React from "react"
import "./footer.css"
import {Container, Row, Col} from 'reactstrap';
class Footer extends React.Component{
    render(){
        return( <div id="footer">
                    <div className="kontak">
                    <Container className="themed-container footer" fluid>
                    <Row className="cp">
                        <Col lg="4">
                           <p>Whatsapp 0822-825-12539</p>
                        </Col>
                        <Col lg="4">
                           <p>palembangdigital01@gmail.com</p>
                        </Col>
                        <Col lg="4">
                           <p>@palembang_digital</p>
                        </Col>
                    </Row>
                    <hr></hr>
                    <p>Palembang Digital Group ©Hak Cipta 2019</p>
                    </Container>
                    
                    </div>
                </div>
        )
    }
}

export default Footer;