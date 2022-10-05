import React from "react";
import Header from "../../../../Header";
import { Link } from "react-router-dom";

const ListPaketAxis = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
        Silakan Pilih
      </div>

      <ul className="list-group">
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="axisdatabronet" style={{ textDecoration: "none" }}>
            Axis Data Bronet 30 Hari
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Axis</li>
              <li>Kuota 24Jam All Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="axisdatakzl" style={{ textDecoration: "none" }}>
            Axis Data KZL
          </Link>
        </li>


        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="axisdatabronetmini" style={{ textDecoration: "none" }}>
            Axis Data Bronet Mini
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Axis</li>
              <li>Kuota 24Jam All Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="axisdataowsem" style={{ textDecoration: "none" }}>
            Axis Data Owsem
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Axis</li>
              <li>Kuota 24Jam All Jaringan</li>
              <li>Bonus Kuota Malam</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="axisdataowsemunlimited" style={{ textDecoration: "none" }}>
            Axis Data Owsem Unlimited
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default ListPaketAxis;
