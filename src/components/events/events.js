import React from "react";
import "./event.css";
import Article from "../article/article";
import { Container, Row, Col } from "reactstrap";
import article1 from "../../images/artikel1.jpeg";
import article2 from "../../images/artikel2.jpeg";
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
              <Col>
                <Article
                  img="https://i.imgur.com/9Km2gEJ.jpg"
                  title="Pengenalan GraphDB"
                />
              </Col>
              <Col>
                <Article
                  img="https://i.imgur.com/bZIm5cm.jpg"
                  title="Coding ala anak terminal"
                />
              </Col>
              <Col>
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
