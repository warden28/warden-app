import React from "react";
import Header from "../../../../Header";

const IndosatTelpon = () => {
  return (
    <div>
      <Header />
      <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
        Silahkan Pilih Produk
      </div>

      <div className="container-fluid">
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            Indosat Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">IT0</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">5.000</div>
          </div>
          <div className="px-3">Telpon 1000 Menit Sesama 1 hari</div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold nama">
            Indosat Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">IT1</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">27.000</div>
          </div>
          <div className="px-3">Telpon Unlimited Sesama 30 hari</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            Indosat Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">IT2</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">18.000</div>
          </div>
          <div className="px-3">
            Telpon Unlimited Sesama + 30 Menit All Operator 7 hari
          </div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold nama">
            Indosat Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">IT3</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">29.000</div>
          </div>
          <div className="px-3">
            Telpon Unlimited Sesama + 60 Menit All Operator 30 hari
          </div>
        </div>
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            Indosat Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">IT5</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">56.000</div>
          </div>
          <div className="px-3">
            Telpon Unlimited Sesama + 250 Menit All Operator 30 hari
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndosatTelpon;
