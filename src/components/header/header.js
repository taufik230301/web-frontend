import React from "react";
import { Title, Link } from "react-head";
const header = () => (
  <>
    <Title>Palembang Digital</Title>
    <Link rel="canonical" content="https://palembangdigital.org/" />
    <Link rel="icon" href={"/logo.png"} type="image/png" />
  </>
);

export default header;
