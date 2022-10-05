import React from "react";
import Header from "../../../../Header";
import { Link } from "react-router-dom";

const ListPaketTelkomsel = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
        Silakan Pilih
      </div>
      <ul className="list-group">
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="TelkomselDataReguler" style={{ textDecoration: "none" }}>
            TELKOMSEL DATA REGULER
            <ul>
              <li>SN 100% Valid</li>
              <li>Kuota 24Jam </li>
              <li>Kuota yang didapat sesuai Zona</li>
              <li>Pengecekan Kuota lewat MyTelkomsel</li>
              <li>Pengecekan Kuota lewat Telepon *363*46#</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="TelkomselDataBulk" style={{ textDecoration: "none" }}>
            TELKOMSEL DATA BULK
            <ul>
              <li>SN 100% Valid</li>
              <li>Full Chip Bulk</li>
              <li>Kuota 24Jam All Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link
            to="TelkomselDataBulkNasional"
            style={{ textDecoration: "none" }}
          >
            TELKOMSEL DATA BULK NASIONAL
            <ul>
              <li>SN 100% Valid</li>
              <li>Kuota 24Jam All Jaringan</li>
              <li>Kuota Berlaku SeIndonesia</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        {/* <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="TelkomselDataCombo" style={{ textDecoration: "none" }}>
            TELKOMSEL DATA COMBO
            <ul>
              <li>Semua Kartu Telkomsel</li>
              <li>Umur Kartu Minimal 3 Bulan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li> */}

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="TelkomselDataFlash" style={{ textDecoration: "none" }}>
            TELKOMSEL DATA FLASH
            <ul>
              <li>SN 100% Valid</li>
              <li>Kuota 24Jam Disemua Jaringan</li>
              <li>Pengecekan Kuota lewat MyTelkomsel</li>
              <li>Pengecekan Kuota lewat Telepon *888*2*2*6#</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="TelkomselDataFlashPromo" style={{ textDecoration: "none" }}>
            TELKOMSEL DATA FLASH PROMO
            <ul>
              <li>SN 100% Valid</li>
              <li>Kuota 24Jam Disemua Jaringan</li>
              <li>Pengecekan Kuota lewat MyTelkomsel</li>
              <li>Pengecekan Kuota lewat Telepon *888*2*2*6#</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        {/* <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="TelkomselDataMaxstream" style={{ textDecoration: "none" }}>
            TELKOMSEL DATA Maxstream
            <ul>
              <li>Kuota Khusus Maxstream Basic</li>
              <li>Kuota 24Jam Disemua Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li> */}

        {/* <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="TelkomselDataGigaMax" style={{ textDecoration: "none" }}>
            TELKOMSEL DATA + GIGAMAX
            <ul>
              <li>Kuota 24Jam Disemua Jaringan</li>
              <li>Kuota Maxstream Khusus Aplikasi Maxstream</li>
              <li>Speed Lancar</li>
              <li>Full Chip</li>
            </ul>
          </Link>
        </li> */}

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="TelkomselDataHarian" style={{ textDecoration: "none" }}>
            TELKOMSEL DATA HARIAN
            <ul>
              <li>SN 100% Valid</li>
              <li>Kuota 24Jam Disemua Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        {/* <li className="list-group-item me-2 ms-2 fw-bold">
          <Link
            to="TelkomselDataPaketBelajar"
            style={{ textDecoration: "none" }}
          >
            TELKOMSEL DATA PAKET BELAJAR
          </Link>
        </li> */}

        {/* <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link
            to="TelkomselDataPaketIlmupedia"
            style={{ textDecoration: "none" }}
          >
            TELKOMSEL DATA PAKET ILMUPEDIA
          </Link>
        </li> */}

        {/* <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="TelkomselDataPaketMalam" style={{ textDecoration: "none" }}>
            TELKOMSEL DATA PAKET MALAM
          </Link>
        </li> */}

        {/* <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link
            to="TelkomselDataPaketRuangGuru"
            style={{ textDecoration: "none" }}
          >
            TELKOMSEL DATA PAKET RUANG GURU
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default ListPaketTelkomsel;
