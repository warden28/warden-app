import React from "react";
import Header from "../../../../Header";

const TelkomselDataReguler = () => {
  return (
    <div>
      <Header />
      <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
        Silahkan Pilih Produk
      </div>
      <div className="container-fluid">
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold" style={{ maxWidth: "214px", borderRadius: '0px 0px 10px 0px' }}>
            Telkomsel Data Reguler
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LD5</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">8.000</div>
          </div>
          <div className="px-3">TSEL DATA 28-50mb 7 hari</div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold" style={{ maxWidth: "214px", borderRadius: '0px 0px 10px 0px' }}>
            Telkomsel Data Reguler
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LD10</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">13.000</div>
          </div>
          <div className="px-3">TSEL DATA 50-80mb 7 hari</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold" style={{ maxWidth: "214px", borderRadius: '0px 0px 10px 0px' }}>
            Telkomsel Data Reguler
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LD20</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">22.000</div>
          </div>
          <div className="px-3">TSEL DATA 240-500mb 7-30 Hari</div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold" style={{ maxWidth: "214px", borderRadius: '0px 0px 10px 0px' }}>
            Telkomsel Data Reguler
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LD50</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">52.000</div>
          </div>
          <div className="px-3">TSEL DATA 1.1-2GB 30 hari</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold" style={{ maxWidth: "214px", borderRadius: '0px 0px 10px 0px' }}>
            Telkomsel Data Reguler
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LD100</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">95.000</div>
          </div>
          <div className="px-3">TSEL DATA 3.5-4GB 30 Hari</div>
        </div>
      </div>
    </div>
  );
};

export default TelkomselDataReguler;
