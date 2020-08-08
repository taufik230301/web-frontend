import React from "react";
import s from "./About.module.scss";
import { Container } from "reactstrap";
import Title from "~/src/components/atoms/Title/Title";

const About = () => {
  return (
    <div id={"tentang"} className={s["tentangContainer"]}>
      <Container className="themed-container" fluid>
        <Title subtitle="Tentang" title="Apa itu Patal?"></Title>
        <p>
          Palembang digital dibentuk pada tanggal 21 april 2020 yang diinisiasi
          oleh Beberapa pelaku IT yang berasal dari Kota Palembang Sumatera
          Selatan. Palembang digital merupakan sebuah komunitas Digital yang
          meliputi Software engineer, Content creator , digital marketing dan
          pelaku digital lainnya yang berasal dari sumatera selatan.
        </p>
      </Container>
    </div>
  );
};

export default About;
