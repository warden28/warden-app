import React from "react";
import Header from "../Header";
import PulsaReguler from './menu//pulsa/PulsaReguler';
import PaketData from './menu/paketdata/PaketData';
import PaketDataVoucher from './menu/paketvoucher/PaketDataVoucher';
import TagihanPascaBayar from './menu/tagihan/TagihanPascaBayar';
import Ecommerce from './menu/ecommerce/Ecommerce';
import ElektronikMoney from './menu/elektronikmoney/ElektronikMoney';
import vcraigo from '../assets/imgvcr/aigo.jpg';
import vcraigo5 from '../assets/imgvcr/aigo5.jpg';
import vcr3 from '../assets/imgvcr/3.jpg';
import vcr6gb from '../assets/imgvcr/vcr6gb.jpg';
import vcrTelkomsel from '../assets/imgvcr/vcrTelkomsel.jpg';
import vcrSmartfren from '../assets/imgvcr/vcrSmartfren.jpg';
import vcrIndosat from '../assets/imgvcr/vcrIndosat.jpg';
import vcrXL from '../assets/imgvcr/vcrxl.jpg';
import Footer from "../Footer";

const Content = () => {
  return (
    <div>
      {/* navbar  */}
      <Header />
      <div className="container-fluid pt-4">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 7"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={vcraigo} className="App-logo d-block w-100 rounded-3" alt="logo" />
            </div>
            <div className="carousel-item">
              <img src={vcraigo5} className="App-logo d-block w-100 rounded-3" alt="logo" />
            </div>
            <div className="carousel-item">
              <img src={vcr3} className="App-logo d-block w-100 rounded-3" alt="logo" />
            </div>
            <div className="carousel-item">
              <img src={vcr6gb} className="App-logo d-block w-100 rounded-3" alt="logo" />
            </div>
            <div className="carousel-item">
              <img src={vcrTelkomsel} className="App-logo d-block w-100 rounded-3" alt="logo" />
            </div>
            <div className="carousel-item">
              <img src={vcrSmartfren} className="App-logo d-block w-100 rounded-3" alt="logo" />
            </div>
            <div className="carousel-item">
              <img src={vcrIndosat} className="App-logo d-block w-100 rounded-3" alt="logo" />
            </div>
            <div className="carousel-item">
              <img src={vcrXL} className="App-logo d-block w-100 rounded-3" alt="logo" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <PulsaReguler />
      <PaketData />
      <PaketDataVoucher />
      <TagihanPascaBayar />
      <Ecommerce />
      <ElektronikMoney />
      <Footer />

    </div>
  );
};

export default Content;
