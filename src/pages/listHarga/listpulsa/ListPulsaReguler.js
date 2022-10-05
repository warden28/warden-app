import React from "react";
import Header from "../../../Header";
import { Link } from "react-router-dom";

const ListPulsaReguler = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
        Silakan Pilih
      </div>
      <ul className="list-group">
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="Telkomsel" style={{ textDecoration: "none" }}>
            Pulsa Telkomsel
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="XL" style={{ textDecoration: "none" }}>
            Pulsa XL
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="Indosat" style={{ textDecoration: "none" }}>
            Pulsa Indosat
          </Link>
        </li>
        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="Axis" style={{ textDecoration: "none" }}>
            Pulsa Axis
          </Link>
        </li>
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="Three" style={{ textDecoration: "none" }}>
            Pulsa Three
          </Link>
        </li>
        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="Smartfren" style={{ textDecoration: "none" }}>
            Pulsa Smartfren
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListPulsaReguler;
