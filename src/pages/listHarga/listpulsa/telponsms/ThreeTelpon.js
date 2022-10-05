import React from "react";
import Header from "../../../../Header";

const ThreeTelpon = () => {
  return (
    <div>
      <Header />
      <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
        Silahkan Pilih Produk
      </div>

      <div className="container-fluid">
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            Tri Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">TT5</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">7.000</div>
          </div>
          <div className="px-3">3 All Operator 20 Menit 7 hari</div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold nama">
            Tri Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">TT15</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">17.000</div>
          </div>
          <div className="px-3">3 All Operator 60 Menit 30 hari</div>
        </div>
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            Tri Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">TT30</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">32.000</div>
          </div>
          <div className="px-3">3 All Operator 150 Menit 30 hari</div>
        </div>
      </div>
    </div>
  );
};

export default ThreeTelpon;
