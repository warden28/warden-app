import React from "react";
import Header from "../../../../Header";

const styleBackground = {
    backgroundColor: '#CFF4FC'
};

const SmartfrenDataUnlimited = () => {
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
                        style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Unlimited
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMU2GB</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">82.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data 4G Unlimited + 2GB/Hari 28 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Unlimited
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMU3GB</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">102.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data 4G Unlimited + 3GB/Hari 28 Hari
                    </div>
                </div>

                <div className="border" style={styleBackground}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Unlimited
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMU7</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">25.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data 4G Unlimited + 1GB/Hari 7 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Unlimited
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMU14</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">42.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data 4G Unlimited + 1GB/Hari 14 Hari
                    </div>
                </div>

                <div className="border" style={styleBackground}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Unlimited
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMU50</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end s8ac02">53.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data 4G Unlimited 500MB/Hari 28 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "250px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data Unlimited
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDMU700</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end s8ac02">63.000</div>
                    </div>
                    <div className="px-3">
                        Smart Data 4G Unlimited 700MB/Hari 28 Hari
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SmartfrenDataUnlimited;
