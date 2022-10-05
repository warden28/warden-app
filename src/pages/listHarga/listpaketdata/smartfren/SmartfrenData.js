import React from "react";
import Header from "../../../../Header";

const styleBackground = {
    backgroundColor: '#CFF4FC'
};

const SmartfrenData = () => {
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
                        style={{ maxWidth: "166px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDM10</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">12.000</div>
                    </div>
                    <div className="px-3">
                        3GB = 1,25GB + 1,75GB malam + 1GB chat + telpon 7 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "166px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDM20</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">23.000</div>
                    </div>
                    <div className="px-3">
                        5GB = 2GB + 3GB malam + 1GB chat + telpon 30 Hari
                    </div>
                </div>

                <div className="border" style={styleBackground}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "166px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDM30</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">31.000</div>
                    </div>
                    <div className="px-3">
                        8GB = 4GB + 4GB malam + 2GB chat + telpon 30 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "166px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDM100</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">102.000</div>
                    </div>
                    <div className="px-3">
                        60GB = 20GB + 40GB malam + gratis HOOQ + telpon 30 Hari
                    </div>
                </div>

                <div className="border" style={styleBackground}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "166px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDM150</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">145.000</div>
                    </div>
                    <div className="px-3">
                        90GB = 30GB + 60GB malam + gratis HOOQ + telpon 30 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "166px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Smartfren Data
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">SDM200</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space2">200.000</div>
                    </div>
                    <div className="px-3">
                        120GB = 40GB + 80GB malam + gratis HOOQ + telpon 30 Hari
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SmartfrenData;
