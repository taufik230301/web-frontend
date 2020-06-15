import React from "react";
import "./about.css";
import { Container } from "reactstrap";
import Title from "../title/title";

class Event extends React.Component {
  render() {
    return (
      <div id="tentang">
        <Container className="themed-container title " fluid>
          <div>
            <Title subtitle="Tentang" title="Apa itu Patal?"></Title>
          </div>
          <div>
            <p>
              Palembang Digital dibentuk pada tanggal 21 April 2020 yang
              diinisiasi oleh beberapa pelaku IT yang berasal dari Kota
              Palembang, Sumatera Selatan. Palembang Digital merupakan sebuah
              komunitas digital yang meliputi software engineer, content
              creator, digital marketing dan pelaku digital lainnya.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Event;
