import React from "react";
import "./join.css";

class Join extends React.Component {
  render() {
    return (
      <div id="join" class="warna">
        <div className="container-join">
          <div class="box">
            <div className="join">
              <h1>Siap gabung ke Patal?</h1>
              <p>
                Klik tombol daftar sekarang untuk mendaftarkan diri anda
                terlebih dahulu!
              </p>
              <div className="boxfit">
                <a
                  href="https://bit.ly/web-join-patal"
                  target="_blank"
                  rel="noreferrer">
                  <button>Daftar Sekarang</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
