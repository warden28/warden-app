import React from "react";
import Header from "../../../../Header";

const AxisDatakzl = () => {
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
                        style={{ maxWidth: "214px", borderRadius: "0px 0px 10px 0px" }}>
                        Axis Data KZL
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">KZL1</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">16.000</div>
                    </div>
                    <div className="px-3">
                        Paket KZL Chat (Whatsapp/LINE) Unlimited / 30 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "214px", borderRadius: "0px 0px 10px 0px" }}>
                        Axis Data KZL
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">KZL2</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">16.000</div>
                    </div>
                    <div className="px-3">
                        Paket KZL Sosmed (FB/IG/Twitter) Unlimited / 30 Hari
                    </div>
                </div>

                <div className="border" style={{ backgroundColor: "#cff4fc" }}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "214px", borderRadius: "0px 0px 10px 0px" }}>
                        Axis Data KZL
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">KZL3</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">23.500</div>
                    </div>
                    <div className="px-3">
                        Paket KZL Combo Sosmed + Chat Unlimited / 30 Hari
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AxisDatakzl;
