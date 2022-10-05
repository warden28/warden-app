import React from "react";
import Header from "../../../../Header";
import { Link } from 'react-router-dom'

const Gojek = () => {
    return (
        <div>
            <Header />
            <div className="mt-2 mb-2 pt-2 pb-2 me-2 ms-2 px-3 bg-info text-light fw-bold rounded-3">
                Silakan Pilih
            </div>
            <ul className="list-group">
                <li className="list-group-item list-group-item-info me-2 ms-2 fw-bold">
                    <Link to="customer" style={{ textDecoration: "none" }}>
                        Gojek Customer
                    </Link>
                </li>

                <li className="list-group-item me-2 ms-2 fw-bold">
                    <Link to="driver" style={{ textDecoration: "none" }}>
                        Gojek Driver
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Gojek;
