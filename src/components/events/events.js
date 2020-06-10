import React from "react";
import "./event.css";
import Article from "../article/article";
import {Container, Row, Col} from 'reactstrap';
import article1 from "../../images/artikel1.jpeg"
import article2 from "../../images/artikel2.jpeg"
import article3 from "../../images/artikel3.jpeg"
import Title from "../title/title"

class Events extends React.Component{
    render(){
        return <div id="event">
                <div className="acara">
                <Container className="themed-container title " fluid>
                    <div>
                        <Title subtitle="Acara diwaktu dekat" title="Kegiatan Patal"></Title>
                    </div>
                    <Row className="cp">
                        <Col >
                            <Article img={article1} title="Berbagi Tips Menjadi Product Design serta UI Designer"/>
                        </Col>
                        <Col>
                            <Article img={article2} title="Dasar & Implementasi Untuk Penggunaan GIT"/>
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