import React from "react";
import "./event.css";
import Article from "../article/article";
import {Container, Row, Col} from 'reactstrap';
import article1 from "../../images/artikel1.jpeg"
import article2 from "../../images/artikel2.jpeg"
import article3 from "../../images/artikel3.jpeg"

class Events extends React.Component{
    render(){
        return <div id="event">
                <div className="acara">
                <Container className="themed-container title " fluid>
                    <div className="title">
                        <h2>Acara diwaktu dekat</h2>
                        <h1>Kegiatan Patal</h1>
                    </div>
                    <Row className="cp">
                        <Col >
                            <Article img={article1} title="Workshop dasar implementasi penggunaan GIT"/>
                        </Col>
                        <Col>
                            <Article img={article2} title="ODP Bareng MYO 2.0 : “Online Dapat Pengetahuan” Berbagi Tips & Pengalaman..."/>
                        </Col>
                        <Col>
                           <Article img={article3} title="Webinar AWS Code Build & Code Deploy"/>
                        </Col>
                    </Row>
                </Container>
                </div>
                </div>
    }
}

export default Events;