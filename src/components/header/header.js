import React from "react";
import { Title, Link, Meta } from "react-head";
import Logo from "../../images/logo.png"
const header = () => (
  <>
    <Title>Palembang Digital</Title>
    <Link rel="canonical" content="https://bejamas.io/" />
    <Link rel="icon" href={Logo} type="image/png"></Link>
  </>
);

export default header;