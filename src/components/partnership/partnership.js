import React from "react";
import "./partnership.css";
import Sponsor from "../sponsor/sponsor";
import { Container, Row, Col } from "reactstrap";

class Partnership extends React.Component {
  render() {
    return (
      <div id="partnership">
        <div className="boxsponsor">
          <Container className="themed-container" fluid="sm">
            <div>
              <h1>Kerjasama kami bersama</h1>
            </div>
            <Row className="partnership">
              <Col>
                <Sponsor
                  site="https://sriwijayahost.id"
                  logo={"/images/sponsors/sh.png"}
                />
              </Col>
              <Col>
                <Sponsor
                  site="https://my-office.co.id"
                  logo={"/images/sponsors/myo.png"}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Partnership;
