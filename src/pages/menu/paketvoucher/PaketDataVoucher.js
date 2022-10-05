import React from "react";
import imgvoucherTelkomsel from "../../../images/voucher/voucherTelkomsel/imgvoucherTelkomsel.jpg";
import imgvoucherXL from "../../../images/voucher/voucherXL/imgvoucherXL.jpg";
import imgvoucherIndosat from "../../../images/voucher/voucherIndosat/imgvoucherIndosat.png";
import imgvoucherAxis from "../../../images/voucher/voucherAxis/imgvoucherAxis.png";
import imgvoucherThree from "../../../images/voucher/voucherThree/imgvoucherThree.jpg";
import imgvoucherSmartfren from "../../../images/voucher/voucherSmartfren/imgvoucherSmartfren.jpg";
import '../pulsaReguler.css';

const PaketDataVoucher = () => {
  return (
    <div>
      {/* Paket Data Voucher Input SN */}
      <div className="container-fluid mt-4">
        <div className="bg-primary text-uppercase text-light pt-2 pb-2 px-2 rounded-3">
          Paket Data Voucher Input sn
        </div>

        <div className="row">
          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img
                src={imgvoucherTelkomsel}
                className="w-100 h-100 rounded-3"
                alt="logo Pulsa"
              />
            </div>
            <p className="text-center title">Voucher Telkomsel</p>
          </div>

          {/* <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img
                src={imgvoucherXL}
                className="w-100 h-100 rounded-3"
                alt="logo Pulsa"
              />
            </div>
            <p className="text-center title">
              Voucher XL
            </p>
          </div> */}

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img
                src={imgvoucherIndosat}
                className="w-100 h-100 rounded-3"
                alt="logo Pulsa"
              />
            </div>
            <p className="text-center title">
              Voucher Indosat
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img
                src={imgvoucherAxis}
                className="w-100 h-100 rounded-3"
                alt="logo Pulsa"
              />
            </div>
            <p className="text-center title">
              Voucher Axis
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <img
                src={imgvoucherThree}
                className="w-100 h-100 rounded-3"
                alt="logo Pulsa"
              />
            </div>
            <p className="text-center title">
              Voucher Three
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mx-auto border border-primary rounded-3 produk"
            >
              <img
                src={imgvoucherSmartfren}
                className="w-100 h-100  rounded-3"
                alt="logo Pulsa"
              />
            </div>
            <p className="text-center title">
              Voucher Smartfren
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaketDataVoucher;
