import React from 'react'
import Header from '../../../Header';
import { Link } from 'react-router-dom'

const ListTelponSms = () => {
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
        Silakan Pilih
      </div>
      <ul className="list-group">

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="telkomselsms" style={{ textDecoration: "none" }}>
            Telkomsel SMS
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="telkomseltelpon" style={{ textDecoration: "none" }}>
            Telkomsel Telpon
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="xltelpon" style={{ textDecoration: "none" }}>
            XL Telpon
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="xlumroh" style={{ textDecoration: "none" }}>
            XL Telpon Umroh dan Haji
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="indosatsms" style={{ textDecoration: "none" }}>
            Indosat SMS
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="indosattelpon" style={{ textDecoration: "none" }}>
            Indosat Telpon
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="axistelpon" style={{ textDecoration: "none" }}>
            Axis Telpon
          </Link>
        </li>

        <li className="list-group-item me-2 ms-2 fw-bold">
          <Link to="threetelpon" style={{ textDecoration: "none" }}>
            Tri Telpon
          </Link>
        </li>

        <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
          <Link to="smartfrentelpon" style={{ textDecoration: "none" }}>
            Smartfren Telpon
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ListTelponSms