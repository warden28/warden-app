import React from "react";
import imgPln from "../../../images/tagihan/pln/imgPln.jpg";
// import imgMatrix from "../../../images/tagihan/matrix/imgMatrix.jpg";
// import imgXLPrioritas from "../../../images/tagihan/xlprioritas/imgXLPrioritas.jpg";
import imgTelkom from "../../../images/tagihan/telkom/imgTelkom.jpg";
import imgBpjs from "../../../images/tagihan/bpjs/imgBpjs.jpg";
import imgPdam from "../../../images/tagihan/pdam/imgPdam.jpg";
// import imgTvCable from "../../../images/tagihan/tvCable/imgTvCable.jpg";
// import imgkartuHalo from "../../../images/tagihan/kartuHalo/imgkartuHalo.jpg";
// import '../pulsaReguler.css';
import { Link } from "react-router-dom";


const TagihanPascaBayar = () => {
  return (
    <div>
      {/* Tagihan Pasca Bayar */}
      <div className="container-fluid mt-4">
        <div className="bg-primary text-uppercase text-light pt-2 pb-2 px-2 rounded-3">
          Tagihan Pasca Bayar
        </div>

        <div className="row">
          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="tagihanpln">
                <img
                  src={imgPln}
                  className="w-100 h-100 rounded-3"
                  alt="Tagihan PLN"
                />
              </Link>
            </div>
            <p className="text-center title">Tagihan PLN</p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img src={imgTelkom} className="w-100 h-100 rounded-3" alt="Telkom" />
            </div>
            <p className="text-center title">
              Telkom
            </p>
          </div>

          {/* <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img
                src={imgkartuHalo}
                className="w-100 h-100 rounded-3"
                alt="Tagihan Kartu Halo"
              />
            </div>
            <p className="text-center title">
              Tagihan Kartu Halo
            </p>
          </div> */}

          {/* <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img
                src={imgXLPrioritas}
                className="w-100 h-100 rounded-3"
                alt="XL Prioritas"
              />
            </div>
            <p className="text-center title">
              XL PRIORITAS
            </p>
          </div> */}

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img src={imgPdam} className="w-100 h-100 rounded-3" alt="PDAM" />
            </div>
            <p className="text-center title">
              PDAM
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img src={imgBpjs} className="w-100 h-100 rounded-3" alt="BPJS" />
            </div>
            <p className="text-center title">
              BPJS
            </p>
          </div>

          {/* <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img src={imgMatrix} className="w-100 h-100 rounded-3" alt="Matrix" />
            </div>
            <p className="text-center title">
              Matrix
            </p>
          </div> */}

          {/* <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img
                src={imgTvCable}
                className="w-100 h-100 rounded-3"
                alt="Tagihan TV Kabel"
                style={{ padding: "3px" }}
              />
            </div>
            <p className="text-center title">
              TAGIHAN TV KABEL
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TagihanPascaBayar;
