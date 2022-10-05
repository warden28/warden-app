import React from "react";
import imgshopeePay from "../../../images/e-commerce/ShopeePay/imgshopeePay.png";
import imgOvo from "../../../images/e-commerce/Ovo/imgOvo.jpg";
import imgLink from "../../../images/e-commerce/Link/imgLink.png";
import imgDana from "../../../images/e-commerce/Dana/imgDana.jpg";
import { Link } from "react-router-dom";
import '../pulsaReguler.css';

const Ecommerce = () => {
  return (
    <div>
      {/* <Elektronik Money */}
      <div className="container-fluid mt-4">
        <div className="bg-primary text-uppercase text-light pt-2 pb-2 px-2 rounded-3">
          E-commerce
        </div>

        <div className="row">
          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="ecommerce/shopeepay">
                <img
                  src={imgshopeePay}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">Shopee Pay</p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="ecommerce/ovo">
                <img
                  src={imgOvo}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">OVO</p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="ecommerce/linkaja">
                <img
                  src={imgLink}
                  className="w-100 h-100 rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">Link Aja</p>
          </div>

          <div className="col-3 col-sm-3 col-md-3">
            <div
              className="mt-3 mx-auto border border-primary rounded-3 produk"
            >
              <Link to="ecommerce/dana">
                <img
                  src={imgDana}
                  className="w-100 h-100  rounded-3"
                  alt="logo Pulsa"
                />
              </Link>
            </div>
            <p className="text-center title">DANA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
