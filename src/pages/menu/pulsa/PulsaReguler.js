import React from "react";
import imgPulsa from '../../../images/pulsareguler/imgPulsa.jpg';
import imgTransfer from "../../../images/pulsareguler/imgTransfer.jpg";
import imgTelponsms from "../../../images/pulsareguler/imgTelponsms.jpg";
import imgToken from "../../../images/pulsareguler/imgToken.jpg";
import '../pulsaReguler.css';
import { Link } from "react-router-dom";


const PulsaReguler = () => {
  return (
    <div>
      {/* Pulsa Reguler & PLN Token */}
      <div className="container-fluid mt-4">
        <div className="bg-primary text-uppercase text-light pt-2 pb-2 px-2 rounded-3">
          Pulsa Reguler & Token pln
        </div>

        <div className="row">
          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="hargapulsa">
                <img
                  src={imgPulsa}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                  style={{ padding: "5px" }}
                />
              </Link>
            </div>
            <p className="text-center title">
              Pulsa Reguler
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="pulsatransfer">
                <img
                  src={imgTransfer}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                  style={{ padding: "5px" }}
                />
              </Link>
            </div>
            <p className="text-center title">
              Pulsa Transfer
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="telpon&sms">
                <img
                  src={imgTelponsms}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                  style={{ padding: "5px" }}
                />
              </Link>
            </div>
            <p className="text-center title">
              Telpon & Sms
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="Tokenpln">
                <img
                  src={imgToken}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                  style={{ padding: "5px" }}
                />
              </Link>
            </div>
            <p className="text-center title">Token PLN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PulsaReguler;
