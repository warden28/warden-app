import React from "react";
import imgTelkomsel from "../../../images/paket/paketTelkomsel/imgTelkomsel.jpg";
import imgXL from "../../../images/paket/paketXL/imgXL.jpg";
import imgIndosat from "../../../images/paket/paketIndosat/imgIndosat.jpg";
import imgAxis from "../../../images/paket/paketAxis/imgAxis.jpg";
import imgThree from "../../../images/paket/paketThree/imgThree.jpg";
import imgSmartfren from "../../../images/paket/paketSmartfren/imgSmartfren.jpg";
import '../pulsaReguler.css';
import { Link } from "react-router-dom";

// const tampilan = {
//   borderRadius: "3px",
// };

// const produk = {
//   width: "60px",
//   height: "60px",
// };

const PaketData = () => {
  return (
    <div>
      {/* Paket Internet */}
      <div className="container-fluid mt-4">
        <div className="bg-primary text-uppercase text-light pt-2 pb-2 px-2 rounded-3">
          Paket Internet
        </div>

        <div className="row">
          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="paketTelkomsel">
                <img
                  src={imgTelkomsel}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">Paket Data Telkomsel</p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="paketXL">
                <img
                  src={imgXL}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">
              Paket Data XL
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="paketIndosat">
                <img
                  src={imgIndosat}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">
              Paket Data Indosat
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="paketAxis">
                <img
                  src={imgAxis}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">
              Paket Data Axis
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="paketThree">
                <img
                  src={imgThree}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">
              Paket Data Three
            </p>
          </div>
          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="paketSmartfren">
                <img
                  src={imgSmartfren}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">
              Paket Data Smartfren
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaketData;
