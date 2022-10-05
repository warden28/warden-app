import React from "react";
import Header from "../../../../Header";

const TelkomselDataCombo = () => {
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
                        style={{ maxWidth: "208px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Telkomsel Data Combo
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">LDC12</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">119.000</div>
                    </div>
                    <div className="px-3">
                        Tsel Data COmbo 12GB + 2GB OMG + 1GB CloudMAX 30 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "208px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Telkomsel Data Combo
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">LDC17</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">136.000</div>
                    </div>
                    <div className="px-3">Tsel Data Combo 17GB + 2GB OMG! 30 Hari</div>
                </div>

                <div className="border" style={{ backgroundColor: "#cff4fc" }}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "208px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Telkomsel Data Combo
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">LDC28</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end space">178.000</div>
                    </div>
                    <div className="px-3">Tsel Data Combo 28GB + 2GB OMG! 30 Hari</div>
                </div>
            </div>
        </div>
    );
};

export default TelkomselDataCombo;
