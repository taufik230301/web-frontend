import "./article.css";
import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const handleClick = (e, url) => {
  window.open(url, "_blank");
};
const Article = (props) => {
  return (
    <div id="article">
      <Card className="team-thumb" onClick={(e) => handleClick(e, props.url)}>
        <CardImg
          top
          width="100%"
          src={props.img}
          // width="264px"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <h3>{props.title}</h3>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Article;
