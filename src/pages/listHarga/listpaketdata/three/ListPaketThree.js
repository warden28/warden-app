import React from "react";
import Header from "../../../../Header";
import { Link } from "react-router-dom";

const ListPaketThree = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
        Silakan Pilih
      </div>

      <ul className="list-group">
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="tridataaon" style={{ textDecoration: "none" }}>
            Tri Data Aon
            <ul>
              <li>Paket Data Internet AON</li>
              <li>Masa Aktif Mengikuti Masa Aktif Kartu</li>
              <li>Kuota Utama 24 Jam ALL Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="tridataapp" style={{ textDecoration: "none" }}>
            Tri Data App
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Tri</li>
              <li>Kuota 24 Jam ALL Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="tridatagetmore" style={{ textDecoration: "none" }}>
            Tri Data Getmore
            <ul>
              <li>Paket Data Internet AON</li>
              <li>Masa Aktif Mengikuti Masa Aktif Kartu</li>
              <li>Kuota Utama 24 Jam All Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        {/* <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="tridatahappy" style={{ textDecoration: "none" }}>
            TRI DATA HAPPY
            <ul>
              <li>Bisa Diisi Ke Semua Nomor TRI</li>
              <li>Kuota 24 Jam All Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li> */}

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="tridatahappyterbaru" style={{ textDecoration: "none" }}>
            Tri Data Happy Terbaru
            <ul>
              <li>Bisa Diisi Ke Semua Nomor TRI</li>
              <li>Kuota 24 Jam All Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="tridatakuotaextra" style={{ textDecoration: "none" }}>
            Tri Data Kuota Extra
            <ul>
              <li>Bisa Diisi Ke Semua Nomor TRI</li>
              <li>Kuota Utama 24 Jam All Jaringan</li>
              <li>Kuota Youtube 512MB/Hari</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="tridatamini" style={{ textDecoration: "none" }}>
            Tri Data Mini
            <ul>
              <li>Bisa Diisi Ke Semua Nomor TRI</li>
              <li>Kuota Utama 24 Jam All Jaringan</li>
              <li>Kuota Youtube 512MB/Hari</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="tridatapure" style={{ textDecoration: "none" }}>
            Tri Data Pure
            <ul>
              <li>Bisa Diisi Ke Semua Nomor TRI</li>
              <li>Kuota Utama 24 Jam All Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="tridataaonnew" style={{ textDecoration: "none" }}>
            Tri Data Aon Terbaru
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListPaketThree;
