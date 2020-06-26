import React from "react";
import "./event.css";
import Article from "../article/article";
import { Container, Row, Col } from "reactstrap";
import article1 from "../../images/artikel1.jpeg";
import Title from "../title/title";

class Events extends React.Component {
  render() {
    return (
      <div id="event">
        <div className="acara">
          <Container className="themed-container title " fluid>
            <div>
              <Title
                subtitle="Acara diwaktu dekat"
                title="Kegiatan Patal"></Title>
            </div>
            <Row className="cp">
              <Col className="col-12 col-sm-12 col-md-4">
                <Article
                  img="https://i.ibb.co/rFL5Qbp/workshop5-1.jpg"
                  title="Pengenalan GraphDB"
                />
              </Col>
              <Col className="col-12 col-sm-12 col-md-4">
                <Article
                  img="https://i.ibb.co/hH0PhS2/workshop5-0.jpg"
                  title="Coding ala anak terminal"
                />
              </Col>
              <Col className="col-12 col-sm-12 col-md-4">
                <Article
                  img={article1}
                  title="Berbagi Tips Menjadi Product Design serta UI Designer"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Events;
