import React from "react";
import "./title.css";
import { Container, Row, Col } from "reactstrap";

const Title = (props) => {
  return (
    <div id="title">
      <Container className="themed-container title " fluid>
        <div>
          <h2>{props.subtitle}</h2>
          <h1>{props.title}</h1>
        </div>
      </Container>
    </div>
  );
};

export default Title;
