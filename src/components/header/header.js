import React from "react";
import { Title, Link } from "react-head";
import Logo from "../../images/logo.png";
const header = () => (
  <>
    <Title>Palembang Digital</Title>
    <Link rel="canonical" content="https://palembangdigital.org/" />
    <Link rel="icon" href={Logo} type="image/png" />
  </>
);

export default header;
