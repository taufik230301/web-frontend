import React from "react";
import "./join.css";

class Join extends React.Component {
  render() {
    return (
      <div id="join" class="warna">
        <div className="container-join">
          <div class="box">
            <div className="join">
              <h1>Bersiap bergabung ke Patal?</h1>
              <p>
                Klik tombol daftar sekarang untuk mendaftarkan diri anda
                terlebih dahulu!
              </p>
              <div className="boxfit">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeXg6QZKgZM7juL_xVDs9ufukMdtF82sitoRL3POh2bZ0xaiw/viewform?usp=sf_link"
                  target="_blank">
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
