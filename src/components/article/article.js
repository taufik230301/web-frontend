import "./article.css";
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Article = (props) => {
  return (
    <div id="article">
      <Card className="team-thumb">
        <CardImg top width="100%" src={props.img} width="264px" height="264px" alt="Card image cap" />
        <CardBody>
            <CardTitle><h1>{props.title}</h1></CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Article;