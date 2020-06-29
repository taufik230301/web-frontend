import React from "react";
import "./event.css";
import Article from "../article/article";
import EventsData from "../../content/events.json";
import { Container, Row, Col } from "reactstrap";
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
              {EventsData.content.map((data, index) => {
                return (
                  <Col key={index}>
                    <Article
                      img={data.image_url}
                      title={data.title}
                      url={data.registration_url}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Events;
