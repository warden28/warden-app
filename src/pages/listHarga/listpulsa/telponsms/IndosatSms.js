import React from "react";
import Header from "../../../../Header";

const IndosatSms = () => {
  return (
    <div>
      <Header />
      <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
        Silahkan Pilih Produk
      </div>

      <div className="container-fluid">
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div
            className="px-3 bg-primary text-light fw-bold nama">
            Indosat SMS
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">IS5</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">7.500</div>
          </div>
          <div className="px-3">Paket SMS Indosat 300 Sesama & 100 All Operator</div>
        </div>

        <div className="border">
          <div
            className="px-3 bg-primary text-light fw-bold nama">
            Indosat SMS
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">IS10</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">13.000</div>
          </div>
          <div className="px-3">Paket SMS Indosat 600 Sesama & 200 All Operator 7 hari</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div
            className="px-3 bg-primary text-light fw-bold nama">
            Indosat SMS
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">IS25</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">29.000</div>
          </div>
          <div className="px-3">Paket SMS Indosat 2000 Sesama & 500 All Operator</div>
        </div>

        <div className="border">
          <div
            className="px-3 bg-primary text-light fw-bold nama">
            Indosat SMS
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">IS1250</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">13.000</div>
          </div>
          <div className="px-3">Paket SMS Indosat 1250 Sesama & 250 All Operator 30 hari</div>
        </div>
      </div>
    </div>
  );
};

export default IndosatSms;
