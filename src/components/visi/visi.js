import React from "react";
import "./visi.css";

const Visi = (props) => {
  return (
    <div id="visi" class="visimisi center">
      <h1>{props.judul}</h1>
      <p>{props.konten1}</p>
    </div>
  );
};

export default Visi;
