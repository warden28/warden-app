import React from "react";
import imgGojek from "../../../images/money/Gojek/imgGojek.jpg";
import imgGrab from "../../../images/money/Grab/imgGrab.jpg";
import imgMaxim from "../../../images/money/Maxim/imgMaxim.jpg";
import { Link } from "react-router-dom";
import '../pulsaReguler.css';

const ElektronikMoney = () => {
  return (
    <div>
      {/* <Elektronik Money */}
      <div className="container-fluid mt-4">
        <div className="bg-primary text-uppercase text-light pt-2 pb-2 px-2 rounded-3">
          Elektronik Money
        </div>

        <div className="row">
          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="grab">
                <img
                  src={imgGrab}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">GRAB</p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="gojek">
                <img
                  src={imgGojek}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">GOJEK</p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="maxim">
                <img
                  src={imgMaxim}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">MAXIM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElektronikMoney;
