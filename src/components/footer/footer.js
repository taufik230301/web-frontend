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
                        <a href="https://api.whatsapp.com/send?phone=6282282512539Whatsapp" target="_blank"> <p>Whatsapp 0822-825-12539</p> </a>
                        </Col>
                        <Col lg="4">
                        <a href="mailto:palembangdigital01@gmail.com" target="_blank"><p>palembangdigital01@gmail.com</p></a>
                        </Col>
                        <Col lg="4">
                        <a href="https://www.instagram.com/palembang_digital/" target="_blank"><p>@palembang_digital</p></a>
                        </Col>
                    </Row>
                    <hr></hr>
                    <p>Palembang Digital ©2020</p>
                    </Container>
                    
                    </div>
                </div>
        )
    }
}

export default Footer;