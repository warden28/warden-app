import React from "react";
import Header from "../../../../Header";

const TriDataGetmore = () => {
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
                        style={{ maxWidth: "180px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data Getmore
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TDGM2</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">35.000</div>
                    </div>
                    <div className="px-3">
                        2GB + 2GB Kuota Youtube (01-06)
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "180px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data Getmore
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TDGM4</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">36.000</div>
                    </div>
                    <div className="px-3">
                        3GB + 4GB Kuota Youtube (01-06)
                    </div>
                </div>

                <div className="border" style={{ backgroundColor: "#cff4fc" }}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "180px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data Getmore
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TDGM2</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">57.000</div>
                    </div>
                    <div className="px-3">
                        5GB + 5GB Kuota Youtube (01-06)
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TriDataGetmore;
