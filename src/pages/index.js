import React from "react";
import Join from "../components/join/join";
import Event from "../components/about/about";
import Visi from "../components/visi/visi";
import Article from "../components/article/article";
import Partnership from "../components/partnership/partnership";
import Misi from "../components/visi/misi";
import Events from "../components/events/events";
import Example from "../components/navbar/navbar";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
 
export default function Home() {
  return <div>
    <main>
          <Header/>
          <Example/>
          <Banner/>
          <Join/>
          <Events/>
          <Event/>
          <Visi judul="Visi" konten1="Menciptakan SDM khususnya masyarakat sumatera selatan untuk memiliki kemampuan daya saing yang unggul dibidang digital"/>
          <Visi judul="Misi" konten1={<Misi/>}/>
          <Partnership />
          <Footer/>
        

    </main>
    </div>
}
