import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./banner.css";
import { Link } from "react-scroll";

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <Container fluid>
          <Row className="jumbotronn" id="banner">
            <Col>
              <h2>Halo,</h2>
              <h1>wong kito!</h1>
              <p>
                Palembang Digital (Patal)
                <span className="bold">
                  {" "}
                  adalah grup berbagi informasi seputar IT Development &amp;
                  Digital di daerah Sumatera Selatan.
                </span>
              </p>
            </Col>
            <Col sm="6" className="logo">
              <img src={"/logo.png"} width="180px" alt="logo" />
            </Col>
          </Row>
          <div className="scroll-down">
            <Link to="join" smooth={true} duration={1000}>
              <img src={"/icons/down.png"} alt="scroll" width="17px"></img>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default Banner;
