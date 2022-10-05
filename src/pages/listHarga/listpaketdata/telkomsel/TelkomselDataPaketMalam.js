import React from "react";
import Header from "../../../../Header";

const TelkomselDataPaketMalem = () => {
  return (
    <div>
      <Header />
      <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
        Silahkan Pilih Produk
      </div>
      <div className="container-fluid">
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div
            className="px-3 bg-primary text-light fw-bold"
            style={{ maxWidth: "288px", borderRadius: "0px 0px 10px 0px" }}
          >
            Telkomsel Data Paket Malam
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LDPM11</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">7.000</div>
          </div>
          <div className="px-3">Paket Malem 1GB (00-07) 1 Hari</div>
        </div>

        <div className="border">
          <div
            className="px-3 bg-primary text-light fw-bold"
            style={{ maxWidth: "288px", borderRadius: "0px 0px 10px 0px" }}
          >
            Telkomsel Data Paket Malam
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LDPM51</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">10.000</div>
          </div>
          <div className="px-3">Paket Malem 5GB (00-07) 1 Hari</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div
            className="px-3 bg-primary text-light fw-bold"
            style={{ maxWidth: "288px", borderRadius: "0px 0px 10px 0px" }}
          >
            Telkomsel Data Paket Malam
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LDPM5</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">20.000</div>
          </div>
          <div className="px-3">Paket Malem 5GB (00-07) 30 Hari</div>
        </div>

        <div className="border">
          <div
            className="px-3 bg-primary text-light fw-bold"
            style={{ maxWidth: "288px", borderRadius: "0px 0px 10px 0px" }}
          >
            Telkomsel Data Paket Malam
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LDPM15</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">27.000</div>
          </div>
          <div className="px-3">Paket Malem 15GB (00-07) 30 Hari</div>
        </div>
      </div>
    </div>
  );
};

export default TelkomselDataPaketMalem;
