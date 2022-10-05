import React from "react";
import Header from "../../../../Header";
import { Link } from "react-router-dom";

const ListPaketSmartfren = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
        Silakan Pilih
      </div>

      <ul className="list-group">
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="smartfrendata" style={{ textDecoration: "none" }}>
            SMARTFREN DATA
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Smartfren</li>
              <li>Kuota Utama 24 Jam Di jaringan 4G </li>
              <li>Gratis Telpon Sesama</li>
              <li>Kuota Malam Berlaku Pukul (01:00 - 05:00)</li>
            </ul>
          </Link>
        </li>

        {/* <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="smartfrendatagokilmax" style={{ textDecoration: "none" }}>
            SMARTFREN DATA GOKIL MAX
            <ul>
              <li>Khusus Kartu Perdana Gokil Max</li>
              <li>Kuota 24 Jam Di jaringan 4G </li>
              <li>Kuota Extra Berlaku Pukul (01:00 - 05:00)</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li> */}

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="smartfrendatanonstop" style={{ textDecoration: "none" }}>
            SMARTFREN DATA NONSTOP
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Smartfren</li>
              <li>Kuota 24 Jam Di jaringan 4G </li>
              <li>Unlimited Nonstop</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="smartfrendataunlimited" style={{ textDecoration: "none" }}>
            SMARTFREN DATA UNLIMITED
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Smartfren</li>
              <li>Kuota 24Jam All Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListPaketSmartfren;
