import React from "react";
import Header from "../../../../Header";

const IndosatDataYellow = () => {
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
                        style={{ maxWidth: "200px", borderRadius: "0px 0px 10px 0px" }}>
                        Indosat Data Yellow
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">IDY1</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">7.000</div>
                    </div>
                    <div className="px-3">
                        Paket Yellow 1GB(3G/4G) 1 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "200px", borderRadius: "0px 0px 10px 0px" }}>
                        Indosat Data Yellow
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">IDY3</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">8.000</div>
                    </div>
                    <div className="px-3">
                        Paket Yellow 1GB(3G/4G) 2 Hari
                    </div>
                </div>

                <div className="border" style={{ backgroundColor: "#cff4fc" }}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "200px", borderRadius: "0px 0px 10px 0px" }}>
                        Indosat Data Yellow
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">IDY7</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">13.000</div>
                    </div>
                    <div className="px-3">
                        Paket Yellow 1GB(3G/4G) 7 Hari
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IndosatDataYellow;
