import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-scroll";

import s from "./Banner.module.scss";
import "lazysizes";

const Banner = () => {
  return (
    <div id="banner">
      <Container fluid>
        <Row className={s["jumbotron"]} id="inner-banner">
          <Col>
            <h2>Halo,</h2>
            <h1>wong kito!</h1>
            <p>
              Palembang Digital (Patal)
              <span className={s["bold"]}>
                {" "}
                adalah grup berbagi informasi seputar IT Development &amp;
                Digital di daerah Sumatera Selatan.
              </span>
            </p>
          </Col>
          <Col sm="6" className={s["logo"]}>
            <img
              data-src={"/logo.png"}
              className="lazyload"
              width="180px"
              alt="logo"
            />
          </Col>
        </Row>
        <div className={s["scrollDown"]}>
          <Link to="join" smooth={true} duration={1000}>
            <img
              data-src={"/icons/down.png"}
              className="lazyload"
              alt="scroll"
              width="17px"></img>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
