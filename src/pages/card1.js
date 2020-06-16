import React from "react";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Example from "../components/navbarteam/navbar1";
import Partnership from "../components/partnership/partnership";
import Footer from "../components/footer/footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Example />
      <Card />
      <Partnership />
      <Footer />
    </div>
  );
}
