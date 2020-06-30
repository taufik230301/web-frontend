import React from "react";
import "./visi.css";

const Visi = (props) => {
  return (
    <div id="visi" className="visimisi center">
      <h1>{props.judul}</h1>
      <div style={{ textAlign: "left", paddingLeft: 15, paddingRight: 15 }}>
        <p>{props.konten1}</p>
      </div>
    </div>
  );
};

export default Visi;
