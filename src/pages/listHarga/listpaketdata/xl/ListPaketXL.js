import React from "react";
import Header from "../../../../Header";
import { Link } from "react-router-dom";

const ListPaketXL = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
        Silakan Pilih
      </div>

      <ul className="list-group">
        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="xldatacomboxtra" style={{ textDecoration: "none" }}>
            XL DATA COMBO XTRA
            <ul>
              <li>Bisa Diisi Ke Semua Nomor XL</li>
              <li>SN 100% Valid</li>
              <li>Kuota Utama 24Jam All Jaringan</li>
              <li>Kuota Youtube</li>
              <li>Bonus Telp All Operator</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        {/* <li className="list-group-item me-2 ms-2 fw-bold">
          <Link
            to="xldatacomboxtrafullspeed"
            style={{ textDecoration: "none" }}
          >
            XL DATA COMBO XTRA FULL SPEED
            <ul>
              <li>Bisa Diisi Ke Semua Nomor XL</li>
              <li>SN 100% Valid</li>
              <li>Kuota Utama 24Jam All Jaringan</li>
              <li>Kuota Youtube</li>
              <li>Bonus Telp All Operator</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li> */}

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="giftxldatacombo" style={{ textDecoration: "none" }}>
            GIFT XL DATA COMBO
            <ul>
              <li>Bisa Diisi Ke Semua Nomor XL</li>
              <li>SN 100% Valid</li>
              <li>Kuota Utama 24Jam All Jaringan</li>
              <li>Kuota Youtube</li>
              <li>Bonus Telp All Operator</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="xldatacombovip" style={{ textDecoration: "none" }}>
            XL DATA COMBO VIP
            <ul>
              <li>Bisa Diisi Ke Semua Nomor XL</li>
              <li>SN 100% Valid</li>
              <li>Kuota Utama 24Jam All Jaringan</li>
              <li>Double Kuota Youtube</li>
              <li>Bonus Telp All Operator</li>
              <li>Kuota Bisa Di Perpanjang dengan paket yang sama</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="giftxldatacombovip" style={{ textDecoration: "none" }}>
            Gift XL DATA COMBO VIP
            <ul>
              <li>Bisa Diisi Ke Semua Nomor XL</li>
              <li>SN 100% Valid</li>
              <li>Kuota Utama 24Jam All Jaringan</li>
              <li>
                Bonus Kuota bisa berbeda atau berubah sesuai dengan kebijakan
                Operator
              </li>
              <li>
                Bonus Kuota bisa anda klaim melalui aplikasi myXL setelah paket
                terisi. Masuk ke menu XL STORE lalu pilih Bonus untuk anda .
                come see your bonus
              </li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="xldatacomboflex" style={{ textDecoration: "none" }}>
            XL DATA COMBO FLEX
            <ul>
              <li>Kuota Full 24 Jam</li>
              <li>Kuota Utama Nasional</li>
              <li>Kuota Lokal sesuai zona dari XL</li>
              <li>Bonus Unlimited Whatsapp & Line</li>
            </ul>
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="xldatahotroad" style={{ textDecoration: "none" }}>
            XL DATA HOTROAD
            <ul>
              <li>Biasa diisi ke semua nomor xl</li>
              <li>SN 100% Valid</li>
              <li>Kuota Utama 24 Jam ALL Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>

        {/* <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="xldatacombolite" style={{ textDecoration: "none" }}>
            XL DATA COMBO LITE
            <ul>
              <li>Bisa diisi kesemua nomor xl</li>
              <li>SN 100% Valid</li>
              <li>Kuota utama 24 Jam ALL Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li> */}

        {/* <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="xldataxtraon" style={{ textDecoration: "none" }}>
            XL DATA XTRA ON
            <ul>
              <li>Bisa diisi kesemua nomor xl</li>
              <li>SN 100% Valid</li>
              <li>Kuota utama 24 Jam ALL Jaringan</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li> */}

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="xldatapure" style={{ textDecoration: "none" }}>
            XL DATA PURE
            <ul>
              <li>Bisa diisi kesemua nomor xl</li>
              <li>SN 100% Valid</li>
              <li>Kuota utama 24 Jam ALL Jaringan</li>
              <li>Tidak menambah masa aktif</li>
              <li>Speed Lancar</li>
            </ul>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListPaketXL;
