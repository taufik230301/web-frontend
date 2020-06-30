import React from "react";
import Join from "../components/join/join";
import Event from "../components/about/about";
import Visi from "../components/visi/visi";
import Partnership from "../components/partnership/partnership";
import Misi from "../components/visi/misi";
import Events from "../components/events/events";
import Example from "../components/navbar/navbar";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

import Media from '../components/media/media'
class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Header />
          <Example />
          <Banner />
          <Join />
          <Events />
          <Event />
          <Visi
            judul="Visi"
            konten1="Menciptakan SDM khususnya masyarakat Sumatera Selatan untuk memiliki kemampuan daya saing yang unggul di bidang digital"
          />
          <Visi judul="Misi" konten1={<Misi />} />
          <Media/>
          <Partnership />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Home;
