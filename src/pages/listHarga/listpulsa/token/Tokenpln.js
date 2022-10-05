import React from "react";
import Header from "../../../../Header";

const Tokenpln = () => {
  return (
    <div>
      <Header />
      <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
        Harga Produk
      </div>

      <div className="container-fluid">
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            Token PLN
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">PLN20</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">22.000</div>
          </div>
          <div className="px-3">PLN TOKEN 20.000</div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold nama">
            Token PLN
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">PLN50</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">52.000</div>
          </div>
          <div className="px-3">PLN TOKEN 50.000</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            Token PLN
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">PLN100</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">102.000</div>
          </div>
          <div className="px-3">PLN TOKEN 100.000</div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold nama">
            Token PLN
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">PLN200</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">202.000</div>
          </div>
          <div className="px-3">PLN TOKEN 200.000</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            Token PLN
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">PLN500</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">502.000</div>
          </div>
          <div className="px-3">PLN TOKEN 500.000</div>
        </div>
      </div>
    </div>
  );
};

export default Tokenpln;
