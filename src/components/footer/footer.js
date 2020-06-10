import React from "react"
import "./footer.css"
import {Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../utils/fontawesome'
import {
    faInstagram,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
class Footer extends React.Component{
    render(){
        return( <div id="footer">
                    <div className="kontak">
                    <Container className="themed-container footer" fluid>
                    <Row className="cp">
                        <Col lg="4">
                        <a href="https://api.whatsapp.com/send?phone=6282282512539Whatsapp" target="_blank"><FontAwesomeIcon icon={faWhatsapp}/> <p>0822-825-12539</p> </a>
                        </Col>
                        <Col lg="4" className="ig">
                        <a href="mailto:palembangdigital01@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelopeSquare}/> <p>palembangdigital01@gmail.com</p></a>
                        
                        </Col>
                        <Col lg="4">
                        <a href="https://www.instagram.com/palembang_digital/" target="_blank"><FontAwesomeIcon icon={faInstagram}/> <p>@palembang_digital</p></a>
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