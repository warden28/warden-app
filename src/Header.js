import React from "react";
import wa from './images/WhatsApp_icon.png';

const Header = () => {
  return (
    <div>
      {/* navbar  */}
      <nav className="navbar navbar-primary bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Warden
          </a>
        </div>
      </nav>
      <div className="fixed-bottom">
        <a href=
          'https://api.whatsapp.com/send?phone=6289509830790&text=Halo%20Admin%20Saya%20Mau%20Order'
        >
          <img src={wa} alt="logo"
            style={{
              float: 'right',
              width: '80px',
              marginRight: '20px',
              marginBottom: '30px'
            }}
          />
        </a>

      </div>
    </div >
  );
};

export default Header;
