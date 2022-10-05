import React from "react";
import Header from "../../../../Header";

const styleBackground = {
    backgroundColor: '#CFF4FC'
};

const TriDataAON = () => {
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
                        style={{ maxWidth: "136px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data AON
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TD1</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">20.000</div>
                    </div>
                    <div className="px-3">
                        AON 1GB + 0,5GB Lokal masa aktif kartu
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "136px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data AON
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TD2</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">23.000</div>
                    </div>
                    <div className="px-3">
                        AON 2GB Nasional masa aktif kartu
                    </div>
                </div>

                <div className="border" style={styleBackground}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "136px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data AON
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TD3</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">33.000</div>
                    </div>
                    <div className="px-3">
                        AON 3GB Nasional masa aktif kartu
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "136px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data AON
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TD6</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">42.000</div>
                    </div>
                    <div className="px-3">
                        AON 6GB Nasional masa aktif kartu
                    </div>
                </div>

                <div className="border" style={styleBackground}>
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "136px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data AON
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TDUF6</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">78.000</div>
                    </div>
                    <div className="px-3">
                        AON Unl (01-17) + 6GB Masa Aktif Kartu
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TriDataAON;
