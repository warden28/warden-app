import React from "react";
import Header from "../../../../Header";

const TelkomselDataMaxstream = () => {
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
            style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
          >
            Telkomsel Data Maxstream
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LDGM4</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">24.000</div>
          </div>
          <div className="px-3">
            Data Video Khusus Maxstream Basic 4GB 30 Hari
          </div>
        </div>

        <div className="border">
          <div
            className="px-3 bg-primary text-light fw-bold"
            style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
          >
            Telkomsel Data Maxstream
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LDGM6</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">19.000</div>
          </div>
          <div className="px-3">
            Data Video Khusus Maxstream Basic 6GB 7 Hari
          </div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div
            className="px-3 bg-primary text-light fw-bold"
            style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
          >
            Telkomsel Data Maxstream
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LDGM30</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">64.000</div>
          </div>
          <div className="px-3">
            Data Video Khusus Maxstream Basic 30GB 30 Hari
          </div>
        </div>

        <div className="border">
          <div
            className="px-3 bg-primary text-light fw-bold"
            style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
          >
            Telkomsel Data Maxstream
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">LDGM50</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">92.000</div>
          </div>
          <div className="px-3">
            Data Video Khusus Maxstream Basic 50GB 30 Hari
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelkomselDataMaxstream;
