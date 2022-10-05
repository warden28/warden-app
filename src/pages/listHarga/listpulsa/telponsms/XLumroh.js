import React from "react";
import Header from "../../../../Header";

const XLumroh = () => {
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
            style={{ maxWidth: "228px", borderRadius: "0px 0px 10px 0px" }}
          >
            XL Telpon Umroh dan Haji
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">XPUH10</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">153.000</div>
          </div>
          <div className="px-3">50 Menit & 50 SMS Umroh & Haji 10 hari</div>
        </div>

        <div className="border">
          <div
            className="px-3 bg-primary text-light fw-bold"
            style={{ maxWidth: "228px", borderRadius: "0px 0px 10px 0px" }}
          >
            XL Telpon Umroh dan Haji
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">XPUH20</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">183.000</div>
          </div>
          <div className="px-3">75 Menit & 75 SMS Umroh & Haji 20 hari</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div
            className="px-3 bg-primary text-light fw-bold"
            style={{ maxWidth: "228px", borderRadius: "0px 0px 10px 0px" }}
          >
            XL Telpon Umroh dan Haji
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">XPUH40</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">203.000</div>
          </div>
          <div className="px-3">100 Menit & 100 SMS Umroh & Haji 40 hari</div>
        </div>
      </div>
    </div>
  );
};

export default XLumroh;
