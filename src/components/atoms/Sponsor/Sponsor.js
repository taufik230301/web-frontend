import React from "react";
import SponsorStyles from "./Sponsor.module.scss";
import { Row, Col } from "reactstrap";
import "lazysizes";

function Sponsor() {
  const names = [
    {
      url: "/images/sponsors/sh.png",
      link: "https://sriwijayahost.id",
    },
    {
      url: "/images/sponsors/myo.png",
      link: "https://my-office.co.id",
    },
    {
      url: "/images/sponsors/AGT.png",
      link: "https://agt.co.id/",
    },
  ];
  return (
    <div className={`${SponsorStyles["sponsor"]}`}>
      <h1 className={`${SponsorStyles["title"]}`}>Kerjasama kami bersama</h1>
      <div className={``}>
        <Row
          className={`${SponsorStyles["overflow"]} ${SponsorStyles["box"]} ${SponsorStyles["centerMargin"]}`}>
          {names.map((name) => (
            <Col
              className={`${SponsorStyles["img"]} ${SponsorStyles["container"]} `}>
              <div className={`${SponsorStyles["bgwhite"]} `}>
                <a href={name.link} target="_blank" rel="noreferrer">
                  <img
                    data-src={name.url}
                    className="lazyload"
                    width="100px"
                    alt="logo_sponsor"
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Sponsor;
