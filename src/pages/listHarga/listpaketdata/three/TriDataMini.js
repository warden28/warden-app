import React from "react";
import Header from "../../../../Header";

const styleBackground = {
    backgroundColor: '#CFF4FC'
};

const TriDataMini = () => {
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
                        style={{ maxWidth: "160px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data Mini
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TDM1</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">15.000</div>
                    </div>
                    <div className="px-3">
                        AON 1GB Nasional 5 Hari
                    </div>
                </div>

                <div className="border">
                    <div
                        className="px-3 bg-primary text-light fw-bold"
                        style={{ maxWidth: "160px", borderRadius: "0px 0px 10px 0px" }}
                    >
                        Tri Data Mini
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">TDM2</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">17.000</div>
                    </div>
                    <div className="px-3">
                        AON 1,5GB Nasional 7 Hari
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TriDataMini;
