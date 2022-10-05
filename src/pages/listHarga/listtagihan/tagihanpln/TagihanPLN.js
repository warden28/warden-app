import React from "react";
import Header from "../../../../Header";


const TagihanPLN = () => {
    return (
        <div>
            <Header />

            <div className="px-3 py-2 mx-2 my-2 rounded-3 bg-info text-light fw-bold">
                Silahkan Pilih Produk
            </div>
            <div className="container-fluid">
                <div className="border" style={{ backgroundColor: "#cff4fc" }}>
                    <div className="px-3 bg-primary text-light fw-bold nama">
                        Axis Reguler
                    </div>
                    <div class="row px-3">
                        <div class="col-10 col-sm-10 col-md-10 fw-bold">BYRPLN</div>
                        <div class="col-2 col-sm-2 col-md-2 fw-bold text-end">3.000</div>
                    </div>
                    <div className="px-3">Tagihan listrik pln + biaya</div>
                </div>

            </div>
        </div>
    );
};

export default TagihanPLN;
