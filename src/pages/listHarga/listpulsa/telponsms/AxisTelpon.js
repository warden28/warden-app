import React from "react";
import Header from "../../../../Header";

const AxisTelpon = () => {
  return (
    <div>
      <Header />
      <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
        Silahkan Pilih Produk
      </div>

      <div className="container-fluid">
        <div className="border" style={{ backgroundColor: "#cff4fc" }}>
          <div className="px-3 bg-primary text-light fw-bold nama">
            Axis Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">AT1</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">10.000</div>
          </div>
          <div className="px-3">
            Axis Telpon 30 Menit ke semua operator 24jam 7hari
          </div>
        </div>

        <div className="border">
          <div className="px-3 bg-primary text-light fw-bold nama">
            Axis Telpon
          </div>
          <div class="row px-3">
            <div class="col-10 col-sm-10 col-md-10 fw-bold">AT2</div>
            <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">27.000</div>
          </div>
          <div className="px-3">
            Axis Telpon 100 menit ke semua operator 24jam 30hari
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxisTelpon;
