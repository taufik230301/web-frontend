import React from "react";
import s from "./Footer.module.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faWhatsapp,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
class Footer extends React.Component {
  render() {
    return (
      <div id={"footer"} className={s["footerContainer"]}>
        <div className={s["kontak"]}>
          <Container className={s["footer"]} fluid>
            <Row className={s["cp"]}>
              <Col lg="3">
                <a
                  href="https://api.whatsapp.com/send?phone=6282282512539"
                  target="_blank"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} /> <p>0822-825-12539</p>{" "}
                </a>
              </Col>
              <Col lg="3">
                <a
                  href="https://www.instagram.com/palembang_digital/"
                  target="_blank"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />{" "}
                  <p>palembang_digital</p>
                </a>
              </Col>
              <Col lg="3">
                <a
                  href="https://www.youtube.com/channel/UCc2Wluk3SISRSNzNlxaQ1Fw"
                  target="_blank"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faYoutubeSquare} />{" "}
                  <p>palembang_digital</p>
                </a>
              </Col>
              <Col lg="3" className="ig">
                <a
                  href="mailto:palembangdigital01@gmail.com"
                  target="_blank"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faEnvelopeSquare} />{" "}
                  <p>palembangdigital01@gmail.com</p>
                </a>
              </Col>
            </Row>

            <hr></hr>
            <Row>
              <Col lg="6" className={s["alamat"]}>
                <a>
                  <p>
                    Graha Edukasi, Jl. MP. Mangkunegara No.5, Bukit sangkal,
                    Kec. Kalidoni, Kota Palembang, Sumatera Selatan 30114
                  </p>
                </a>
              </Col>
              <Col lg="6" className={s["copyright"]}>
                <a>
                  <p>Palembang Digital &copy; 2020</p>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Footer;
