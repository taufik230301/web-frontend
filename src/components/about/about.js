import React from "react";
import "./about.css";
import { Container } from "reactstrap";
import Title from "../title/title";

<<<<<<< HEAD
class Event extends React.Component{
    render(){
        return <div id="tentang">
                
                <Container className="themed-container title " fluid>
                    <div>
                        <Title subtitle="Tentang" title="Apa itu Patal?"></Title>
                    </div>
                    <div>
                        <p>Palembang digital dibentuk pada tanggal 21 april 2020 yang diinisiasi oleh Beberapa pelaku IT yang berasal dari Kota Palembang Sumatera Selatan. Palembang digital merupakan sebuah komunitas Digital yang meliputi Software engineer, Content creator , digital marketing dan pelaku digital lainnya yang berasal dari sumatera selatan.</p>
                    </div>
                </Container>
                </div>
              
    }
=======
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
>>>>>>> d27aff853b94e47b09357a222f3301674bd0b381
}

export default Event;
