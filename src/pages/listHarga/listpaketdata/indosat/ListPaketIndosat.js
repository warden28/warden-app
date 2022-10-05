import React from "react";
import Header from "../../../../Header";
import { Link } from "react-router-dom";

const ListPaketIndosat = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
        Silakan Pilih
      </div>

      <ul className="list-group">
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="indosatdatafreedom" style={{ textDecoration: "none" }}>
            Indosat Data Freedom
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Indosat</li>
              <li>SN 100% Valid</li>
              <li>Kuota 24Jam All Jaringan</li>
              <li>Masa AKtif 30 Hari</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="indosatdatafreedomcombo" style={{ textDecoration: "none" }}>
            Indosat Data Freedom Combo Attack
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Indosat</li>
              <li>Kuota Utama 24Jam All Jaringan</li>
              <li>Kuota Malam Berlaku 00-06</li>
              <li>Masa Aktif 30 Hari</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link
            to="indosatdatafreedomharian"
            style={{ textDecoration: "none" }}
          >
            Indosat Data Freedom Harian
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Indosat</li>
              <li>SN 100% Valid</li>
              <li>Kuota 24Jam All Jaringan</li>
              <li>Kuota 1GB perhari, diatas 1GB speed melambat</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link
            to="indosatdatafreedomminijabo"
            style={{ textDecoration: "none" }}
          >
            Indosat Data Freedom Mini Jabo
            <ul>
              <li>Bisa Diisi Ke Semua Nomor Indosat</li>
              <li>SN 100% Valid</li>
              <li>Kuota 24Jam All Jaringan</li>
              <li>Kuota 1gb/hari, Melebihi 1gb Speed berkurang</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link
            to="giftindosatdatayellow"
            style={{ textDecoration: "none" }}
          >
            Gift Indosat Data Yellow
            <ul>
              <li>Bisa diisi Ke Semua Nomor Indosat</li>
              <li>Kondisi Nomor tidak dalam masa tenggang</li>
              <li>Tidak ada paket yang aktif, jika ada silahkan di unreg dengan cara Ketik
                UNREG Kirim ke 363
              </li>
              <li>Kuota 24 Jam All Jaringan</li>
              <li>Tidak menambah masa aktif kartu</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="indosatdatapure" style={{ textDecoration: "none" }}>
            Indosat Data Pure
            <ul>
              <li>Bisa diisi Ke Semua Nomor Indosat</li>
              <li>SN 100% Valid</li>
              <li>Kuota Utama 24 Jam All Jaringan</li>
              <li>Wajib Paket unreg paket yang sebelumnya</li>
              <li>Cek kuota di *234*999# atau di aplikasi MY IM3</li>
              <li>Tidak Menambah Masa Aktif Kartu</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="indosatdataunlimited" style={{ textDecoration: "none" }}>
            Indosat Data Unlimited
            <ul>
              <li>Bisa Diisi kesemua Nomor Indosat</li>
              <li>SN 100% Valid</li>
              <li>Kuota Utama 24 Jam All Jaringan</li>
              <li>Bonus kuota aplikasi & youtube</li>
              <li>Bonus SMS & Telpon </li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="indosatdatayellow" style={{ textDecoration: "none" }}>
            Indosat Data Yellow
            <ul>
              <li>Bisa diisi kesemua nomor indosat</li>
              <li>SN 100% Valid</li>
              <li>Kuota 24 Jam ALL Jaringan</li>
              <li>Masa aktif Harian</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="giftindosatdataunlimited" style={{ textDecoration: "none" }}>
            Gift Indosat Data Unlimited
            <ul>
              <li>Bisa Diisi kesemua Nomor Indosat</li>
              <li>Kondisi Nomor tidak dalam masa tenggang</li>
              <li>Tidak ada paket yang aktif, jika ada silahkan di unreg dengan cara ketik: UNREG kirim ke 363</li>
              <li>Kuota 24 Jam All Jaringan</li>
              <li>Tidak menambah masa aktif</li>
            </ul>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default ListPaketIndosat;
