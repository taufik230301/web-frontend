import React from "react"
import "./about.css"
import {Container, Row, Col} from 'reactstrap';
import Title from "../title/title"

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
}

export default Event;