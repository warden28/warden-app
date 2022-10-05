import React from "react";
import Header from "../../../../Header";

const IndosatDataFreedomHarian = () => {
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
                        style={{ maxWidth: "264px", borderRadius: "0px 0px 10px 0px" }}>
                        Indosat Data Freedom Harian
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">IDFH7</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">33.000</div>
                    </div>
                    <div className="px-3">
                        Freedom Kuota Harian 7GB (1GB/hari), 7 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "264px", borderRadius: "0px 0px 10px 0px" }}>
                        Indosat Data Freedom Harian
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">IDFH14</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">51.000</div>
                    </div>
                    <div className="px-3">
                        Freedom Kuota Harian 14GB (1GB/hari), 14 Hari
                    </div>
                </div>

                <div className="border" style={{ backgroundColor: "#cff4fc" }}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "264px", borderRadius: "0px 0px 10px 0px" }}>
                        Indosat Data Freedom Harian
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">IDFH28</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">88.000</div>
                    </div>
                    <div className="px-3">
                        Freedom Kuota Harian 28GB (1GB/hari), 28 Hari
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IndosatDataFreedomHarian;
