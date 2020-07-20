import React from "react";
import SEO from "~/src/components/atoms/SEO/SEO";
import Join from "~/src/components/atoms/Join/Join";
import About from "~/src/components/atoms/About/About";
import Visi from "~/src/components/atoms/Visi/Visi";
import Misi from "~/src/components/atoms/Visi/Misi";
import Events from "~/src/components/atoms/Events/Events";
import Navbar from "~/src/components/atoms/Navbar/Navbar";
import Banner from "~/src/components/atoms/Banner/Banner";
import Footer from "~/src/components/atoms/Footer/Footer";
import Media from "~/src/components/atoms/Media/Media";
import Sponsor from "~/src/components/atoms/Sponsor/Sponsor";

import "~/node_modules/bootstrap/dist/css/bootstrap.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <SEO />
        <main style={{ backgroundColor: "#fafafa" }}>
          <Navbar />
          <Banner />
          <Join />
          <Events />
          <About />
          <Visi
            judul="Visi"
            konten1="Menciptakan SDM khususnya masyarakat Sumatera Selatan untuk memiliki kemampuan daya saing yang unggul di bidang digital"
          />
          <Visi judul="Misi" konten1={<Misi />} />
          <Media />
          <Sponsor />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Home;
