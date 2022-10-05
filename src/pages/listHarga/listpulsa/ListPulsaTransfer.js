import React from "react";
import Header from '../../../Header';
import { Link } from 'react-router-dom'

const ListPulsaTransfer = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
        Silakan Pilih
      </div>
      <ul className="list-group">
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="TelkomselTransfer" style={{ textDecoration: "none" }}>
            Telkomsel Pulsa Transfer
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="XLTransfer" style={{ textDecoration: "none" }}>
            XL Pulsa Transfer
          </Link>
        </li>
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="IndosatTransfer" style={{ textDecoration: "none" }}>
            Indosat Pulsa Transfer
          </Link>
        </li>
        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="AxisTransfer" style={{ textDecoration: "none" }}>
            Axis Pulsa Transfer
          </Link>
        </li>
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="ThreeTransfer" style={{ textDecoration: "none" }}>
            Three Telpon
          </Link>
        </li>
        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="SmartfrenTransfer" style={{ textDecoration: "none" }}>
            Smartfren Pulsa Transfer
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListPulsaTransfer;
