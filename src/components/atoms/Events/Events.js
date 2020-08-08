import React from "react";
import s from "./Events.module.scss";
import Article from "~/src/components/atoms/Article/Article";
import EventsData from "~/src/content/event.json";
import { Container, Row, Col } from "reactstrap";
import Title from "~/src/components/atoms/Title/Title";

class Events extends React.Component {
  render() {
    return (
      <div id="events" className={s["eventsContainer"]}>
        <div className={s["acara"]}>
          <Container className={`${s["themedContainer"]} ${s["title"]}`} fluid>
            <div>
              <Title
                subtitle="Acara diwaktu dekat"
                title="Kegiatan Patal"></Title>
            </div>
            <Row className={`${s["cp"]} ${s["col"]}`}>
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
