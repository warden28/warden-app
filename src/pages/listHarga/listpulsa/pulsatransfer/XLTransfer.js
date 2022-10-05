import React from "react";
import Header from "../../../../Header";

const XLTransfer = () => {
  return (
    <div>
      <Header />
      <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
        Silahkan Pilih Produk
      </div>

      <div className="container-fluid">
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            XL Transfer
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">XTP5</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">7.000</div>
          </div>
          <div className="px-3">Pulsa Transfer XL 5K (+3 hari)</div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold nama">
            XL Transfer
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">XTP10</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">12.000</div>
          </div>
          <div className="px-3">Pulsa Transfer XL 10K (+3 hari))</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            XL Transfer
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">XTP25</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">26.000</div>
          </div>
          <div className="px-3">Pulsa Transfer XL 25 (+10 hari))</div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold nama">
            XL Transfer
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">XTP30</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">31.000</div>
          </div>
          <div className="px-3">Pulsa Transfer XL 30K (+10 hari))</div>
        </div>

        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            XL Transfer
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">XTP50</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">51.000</div>
          </div>
          <div className="px-3">Pulsa Transfer XL 50K (+10 hari))</div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold nama">
            XL Transfer
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">XTP100</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">100.000</div>
          </div>
          <div className="px-3">Pulsa Transfer XL (+30 hari))</div>
        </div>
      </div>
    </div>
  );
};

export default XLTransfer;
