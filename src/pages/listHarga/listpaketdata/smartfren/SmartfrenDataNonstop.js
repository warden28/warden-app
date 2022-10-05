import React from "react";
import Header from "../../../../Header";

const styleBackground = {
    backgroundColor: '#CFF4FC'
};

const SmartfrenDataNonstop = () => {
    return (
        <div>
            <Header />
            <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
                Silahkan Pilih Produk
            </div>
            <div className="container-fluid">
                <div className="border" style={styleBackground}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "220px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Nonstop
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMN2</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">12.500</div>
                    </div>
                    <div className="px-3">
                        Smart Data Nonstop 2GB + Unlimited Aplikasi 10 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "220px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Nonstop
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMN12</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">47.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data Nonstop 12GB + Unlimited Aplikasi 30 Hari
                    </div>
                </div>

                <div className="border" style={styleBackground}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "220px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Nonstop
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMN30</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">72.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data Nonstop 30GB + Unlimited Aplikasi 30 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "220px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Nonstop
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMN45</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">100.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data Nonstop 45GB + Unlimited Aplikasi 30 Hari
                    </div>
                </div>

                <div className="border" style={styleBackground}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "220px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Nonstop
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMN60</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">125.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data Nonstop 60GB + Unlimited Aplikasi 30 Hari
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SmartfrenDataNonstop;
