import React from "react";
import Content from "../pages/Content";
import Slide from "../Slide";
import ListPulsaReguler from "../pages/listHarga/listpulsa/ListPulsaReguler";
import PulsaTelkomsel from "../pages/listHarga/listpulsa/pulsaTelkomsel/PulsaTelkomsel";
import PulsaXL from "../pages/listHarga/listpulsa/pulsaXL/PulsaXL";
import PulsaIndosat from "../pages/listHarga/listpulsa/pulsaIndosat/PulsaIndosat";
import PulsaAxis from "../pages/listHarga/listpulsa/pulsaAxis/PulsaAxis";
import PulsaThree from "../pages/listHarga/listpulsa/pulsaThree/PulsaThree";
import PulsaSmartfren from "../pages/listHarga/listpulsa/pulsaSmartfren/PulsaSmartfren";
import ListPulsaTransfer from "../pages/listHarga/listpulsa/ListPulsaTransfer";
import TelkomselTransfer from "../pages/listHarga/listpulsa/pulsatransfer/TelkomselTransfer";
import XLTransfer from "../pages/listHarga/listpulsa/pulsatransfer/XLTransfer";
import IndosatTransfer from "../pages/listHarga/listpulsa/pulsatransfer/IndosatTransfer";
import ThreeTransfer from "../pages/listHarga/listpulsa/pulsatransfer/ThreeTransfer";
import SmartfrenTransfer from "../pages/listHarga/listpulsa/pulsatransfer/SmartfrenTransfer";
import ListTelponSms from "../pages/listHarga/listpulsa/ListTelponSms";
import TelkomselSms from "../pages/listHarga/listpulsa/telponsms/TelkomselSms";
import Telkomseltelpon from "../pages/listHarga/listpulsa/telponsms/Telkomseltelpon";
import XLtelpon from "../pages/listHarga/listpulsa/telponsms/XLtelpon";
import XLumroh from "../pages/listHarga/listpulsa/telponsms/XLumroh";
import IndosatSms from "../pages/listHarga/listpulsa/telponsms/IndosatSms";
import IndosatTelpon from "../pages/listHarga/listpulsa/telponsms/IndosatTelpon";
import AxisTelpon from "../pages/listHarga/listpulsa/telponsms/AxisTelpon";
import ThreeTelpon from "../pages/listHarga/listpulsa/telponsms/ThreeTelpon";
import Tokenpln from "../pages/listHarga/listpulsa/token/Tokenpln";
// akhir routing pulsa
import ListPaketTelkomsel from "../pages/listHarga/listpaketdata/telkomsel/ListPaketTelkomsel";
import ListPaketXL from "../pages/listHarga/listpaketdata/xl/ListPaketXL";
import ListPaketIndosat from "../pages/listHarga/listpaketdata/indosat/ListPaketIndosat";
import ListPaketAxis from "../pages/listHarga/listpaketdata/axis/ListPaketAxis";
import ListPaketThree from "../pages/listHarga/listpaketdata/three/ListPaketThree";
import ListPaketSmartfren from "../pages/listHarga/listpaketdata/smartfren/ListPaketSmartfren";
// listing paket
import TelkomselDataReguler from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataReguler";
import TelkomselDataBulk from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataBulk";
import TelkomselDataBulkNasional from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataBulkNasional";
import TelkomselDataCombo from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataCombo";
import TelkomselDataFlash from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataFlash";
import TelkomselDataFlashPromo from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataFlashPromo";
import TelkomselDataMaxstream from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataMaxstream";
import TelkomselDataGigamax from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataGigamax";
import TelkomselDataHarian from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataHarian";
import TelkomselDataPaketBelajar from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataPaketBelajar";
import TelkomselDataPaketIlmupedia from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataPaketIlmupedia";
import TelkomselDataPaketMalam from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataPaketMalam";
import TelkomselDataPaketRuangGuru from "../pages/listHarga/listpaketdata/telkomsel/TelkomselDataPaketRuangGuru";
import XLDataComboXtra from "../pages/listHarga/listpaketdata/xl/XLDataComboXtra";
import GiftXLDataCombo from "../pages/listHarga/listpaketdata/xl/GiftXLDataCombo";
import XLDataComboVIP from "../pages/listHarga/listpaketdata/xl/XLDataComboVIP";
import GiftXLDataComboVIP from "../pages/listHarga/listpaketdata/xl/GiftXLDataComboVIP";
import XLDataComboFlex from "../pages/listHarga/listpaketdata/xl/XLDataComboFlex";
import XLDataHotroad from "../pages/listHarga/listpaketdata/xl/XLDataHotroad";
import XLDataPure from "../pages/listHarga/listpaketdata/xl/XLDataPure";
import IndosatDataFreedom from "../pages/listHarga/listpaketdata/indosat/IndosatDataFreedom";
import IndosatDataFreedomCombo from "../pages/listHarga/listpaketdata/indosat/IndosatDataFreedomCombo";
import IndosatDataFreedomHarian from "../pages/listHarga/listpaketdata/indosat/IndosatDataFreedomHarian";
import IndosatDataFreedomMiniJabo from "../pages/listHarga/listpaketdata/indosat/IndosatDataFreedomMiniJabo";
import GiftIndosatDataYellow from "../pages/listHarga/listpaketdata/indosat/GiftIndosatDataYellow";
import IndosatDataPure from "../pages/listHarga/listpaketdata/indosat/IndosatDataPure";
import IndosatDataUnlimited from "../pages/listHarga/listpaketdata/indosat/IndosatDataUnlimited";
import IndosatDataYellow from "../pages/listHarga/listpaketdata/indosat/IndosatDataYellow";
import GiftIndosatDataUnlimited from "../pages/listHarga/listpaketdata/indosat/GiftIndosatDataUnlimited";
import AxisDataBronet from "../pages/listHarga/listpaketdata/axis/AxisDataBronet";
import AxisDataBronetMini from "../pages/listHarga/listpaketdata/axis/AxisDataBronetMini";
import AxisDatakzl from "../pages/listHarga/listpaketdata/axis/AxisDatakzl";
import AxisDataOwsem from "../pages/listHarga/listpaketdata/axis/AxisDataOwsem";
import AxisDataOwsemUnlimited from "../pages/listHarga/listpaketdata/axis/AxisDataOwsemUnlimited";
import TriDataAON from "../pages/listHarga/listpaketdata/three/TriDataAON";
import TriDataApp from "../pages/listHarga/listpaketdata/three/TriDataApp";
import TriDataGetmore from "../pages/listHarga/listpaketdata/three/TriDataGetmore";
import TriDataHappyNew from "../pages/listHarga/listpaketdata/three/TriDataHappyNew";
import TriDataKuotaExtra from "../pages/listHarga/listpaketdata/three/TriDataKuotaExtra";
import TriDataPure from "../pages/listHarga/listpaketdata/three/TriDataPure";
import TriDataMini from "../pages/listHarga/listpaketdata/three/TriDataMini";
import TriDataAONNew from "../pages/listHarga/listpaketdata/three/TriDataAONNew";
import SmartfrenData from "../pages/listHarga/listpaketdata/smartfren/SmartfrenData";
import SmartfrenDataNonstop from "../pages/listHarga/listpaketdata/smartfren/SmartfrenDataNonstop";
import SmartfrenDataUnlimited from "../pages/listHarga/listpaketdata/smartfren/SmartDataUnlimited";
// listing Ecommerce
import TopupLinkAja from "../pages/listHarga/listecommerce/linkaja/TopupLinkAja";
import TopupOvo from "../pages/listHarga/listecommerce/ovo/TopupOvo";
import TopupDana from "../pages/listHarga/listecommerce/dana/TopupDana";
import TopupShopeePay from "../pages/listHarga/listecommerce/shopeepay/TopupShopeePay";

// listing tagihan 
import TagihanPLN from "../pages/listHarga/listtagihan/tagihanpln/TagihanPLN";

// listing ElektronikMoney
import Gojek from "../pages/listHarga/listemoney/Gojek/Gojek";
import Gojekcustomer from "../pages/listHarga/listemoney/Gojek/Gojekcustomer";
import Gojekdriver from "../pages/listHarga/listemoney/Gojek/Gojekdriver";
import Grab from "../pages/listHarga/listemoney/Grab/Grab";
import Grabcustomer from "../pages/listHarga/listemoney/Grab/Grabcustomer";
import Grabdriver from "../pages/listHarga/listemoney/Grab/Grabdriver";
import Maxim from "../pages/listHarga/listemoney/Maxim/Maxim";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/hargapulsa/Telkomsel" element={<PulsaTelkomsel />} />
          <Route path="/hargapulsa/XL" element={<PulsaXL />} />
          <Route path="/hargapulsa/Indosat" element={<PulsaIndosat />} />
          <Route path="/hargapulsa/Axis" element={<PulsaAxis />} />
          <Route path="/hargapulsa/Three" element={<PulsaThree />} />
          <Route path="/hargapulsa/Smartfren" element={<PulsaSmartfren />} />
          <Route path="/pulsatransfer" element={<ListPulsaTransfer />} />
          <Route
            path="/pulsatransfer/telkomseltransfer"
            element={<TelkomselTransfer />}
          />
          <Route path="/pulsatransfer/xltransfer" element={<XLTransfer />} />
          <Route
            path="/pulsatransfer/indosattransfer"
            element={<IndosatTransfer />}
          />
          <Route
            path="/pulsatransfer/threetransfer"
            element={<ThreeTransfer />}
          />
          <Route
            path="/pulsatransfer/smartfrentransfer"
            element={<SmartfrenTransfer />}
          />
          <Route path="telpon&sms" element={<ListTelponSms />} />
          <Route path="telpon&sms/telkomselsms" element={<TelkomselSms />} />
          <Route
            path="telpon&sms/telkomseltelpon"
            element={<Telkomseltelpon />}
          />
          <Route path="telpon&sms/xltelpon" element={<XLtelpon />} />
          <Route path="telpon&sms/xlumroh" element={<XLumroh />} />
          <Route path="telpon&sms/indosatsms" element={<IndosatSms />} />
          <Route path="telpon&sms/indosattelpon" element={<IndosatTelpon />} />
          <Route path="telpon&sms/axistelpon" element={<AxisTelpon />} />
          <Route path="telpon&sms/threetelpon" element={<ThreeTelpon />} />
          <Route path="tokenpln" element={<Tokenpln />} />
          <Route path="about" element={<Slide />} />
          <Route path="hargapulsa" element={<ListPulsaReguler />} />
          <Route path="paketTelkomsel" element={<ListPaketTelkomsel />} />
          <Route path="paketIndosat" element={<ListPaketIndosat />} />
          <Route path="paketxl" element={<ListPaketXL />} />
          <Route path="paketAxis" element={<ListPaketAxis />} />
          <Route path="paketThree" element={<ListPaketThree />} />
          <Route path="paketSmartfren" element={<ListPaketSmartfren />} />
          <Route
            path="paketTelkomsel/telkomseldatareguler"
            element={<TelkomselDataReguler />}
          />
          <Route
            path="paketTelkomsel/telkomseldatabulk"
            element={<TelkomselDataBulk />}
          />
          <Route
            path="paketTelkomsel/telkomseldatabulknasional"
            element={<TelkomselDataBulkNasional />}
          />
          <Route
            path="paketTelkomsel/telkomseldatacombo"
            element={<TelkomselDataCombo />}
          />
          <Route
            path="paketTelkomsel/telkomseldataflash"
            element={<TelkomselDataFlash />}
          />
          <Route
            path="paketTelkomsel/telkomseldataflashpromo"
            element={<TelkomselDataFlashPromo />}
          />
          <Route
            path="paketTelkomsel/telkomseldatamaxstream"
            element={<TelkomselDataMaxstream />}
          />
          <Route
            path="paketTelkomsel/telkomseldatagigaMax"
            element={<TelkomselDataGigamax />}
          />
          <Route
            path="paketTelkomsel/telkomseldataharian"
            element={<TelkomselDataHarian />}
          />
          <Route
            path="paketTelkomsel/telkomseldatapaketbelajar"
            element={<TelkomselDataPaketBelajar />}
          />
          <Route
            path="paketTelkomsel/telkomseldatapaketilmupedia"
            element={<TelkomselDataPaketIlmupedia />}
          />
          <Route
            path="paketTelkomsel/telkomseldatapaketmalam"
            element={<TelkomselDataPaketMalam />}
          />
          <Route
            path="paketTelkomsel/TelkomselDataPaketRuangGuru"
            element={<TelkomselDataPaketRuangGuru />}
          />
          <Route path="paketXL/xldatacomboxtra" element={<XLDataComboXtra />} />
          <Route path="paketXL/giftxldatacombo" element={<GiftXLDataCombo />} />
          <Route path="paketXL/xldatacombovip" element={<XLDataComboVIP />} />
          <Route
            path="paketXL/giftxldatacombovip"
            element={<GiftXLDataComboVIP />}
          />
          <Route
            path="paketXL/xldatacomboflex"
            element={<XLDataComboFlex />}
          />
          <Route
            path="paketXL/xldatahotroad"
            element={<XLDataHotroad />}
          />
          <Route
            path="paketXL/xldatapure"
            element={<XLDataPure />}
          />
          <Route
            path="paketindosat/indosatdatafreedom"
            element={<IndosatDataFreedom />}
          />
          <Route
            path="paketindosat/indosatdatafreedomcombo"
            element={<IndosatDataFreedomCombo />}
          />
          <Route
            path="paketindosat/indosatdatafreedomharian"
            element={<IndosatDataFreedomHarian />}
          />
          <Route
            path="paketindosat/indosatdatafreedomminijabo"
            element={<IndosatDataFreedomMiniJabo />}
          />
          <Route
            path="paketindosat/giftindosatdatayellow"
            element={<GiftIndosatDataYellow />}
          />
          <Route
            path="paketindosat/indosatdatapure"
            element={<IndosatDataPure />}
          />
          <Route
            path="paketindosat/indosatdataunlimited"
            element={<IndosatDataUnlimited />}
          />
          <Route
            path="paketindosat/indosatdatayellow"
            element={<IndosatDataYellow />}
          />
          <Route
            path="paketindosat/giftindosatdataunlimited"
            element={<GiftIndosatDataUnlimited />}
          />
          <Route
            path="paketaxis/axisdatabronet"
            element={<AxisDataBronet />}
          />
          <Route
            path="paketaxis/axisdatabronetmini"
            element={<AxisDataBronetMini />}
          />
          <Route
            path="paketaxis/axisdatakzl"
            element={<AxisDatakzl />}
          />
          <Route
            path="paketaxis/axisdataowsem"
            element={<AxisDataOwsem />}
          />
          <Route
            path="paketaxis/axisdataowsemunlimited"
            element={<AxisDataOwsemUnlimited />}
          />
          <Route
            path="paketthree/tridataaon"
            element={<TriDataAON />}
          />
          <Route
            path="paketthree/tridataapp"
            element={<TriDataApp />}
          />
          <Route
            path="paketthree/tridatagetmore"
            element={<TriDataGetmore />}
          />
          <Route
            path="paketthree/tridatahappyterbaru"
            element={<TriDataHappyNew />}
          />
          <Route
            path="paketthree/tridatakuotaextra"
            element={<TriDataKuotaExtra />}
          />
          <Route
            path="paketthree/tridatapure"
            element={<TriDataPure />}
          />
          <Route
            path="paketthree/tridatamini"
            element={<TriDataMini />}
          />
          <Route
            path="paketthree/tridataaonnew"
            element={<TriDataAONNew />}
          />
          <Route
            path="paketsmartfren/smartfrendata"
            element={<SmartfrenData />}
          />
          <Route
            path="paketsmartfren/smartfrendatanonstop"
            element={<SmartfrenDataNonstop />}
          />
          <Route
            path="paketsmartfren/smartfrendataunlimited"
            element={<SmartfrenDataUnlimited />}
          />
          <Route
            path="tagihanpln"
            element={<TagihanPLN />}
          />
          <Route
            path="ecommerce/linkaja"
            element={<TopupLinkAja />}
          />
          <Route
            path="ecommerce/ovo"
            element={<TopupOvo />}
          />
          <Route
            path="ecommerce/dana"
            element={<TopupDana />}
          />
          <Route
            path="ecommerce/shopeepay"
            element={<TopupShopeePay />}
          />
          <Route
            path="gojek"
            element={<Gojek />}
          />
          <Route
            path="gojek/customer"
            element={<Gojekcustomer />}
          />
          <Route
            path="gojek/driver"
            element={<Gojekdriver />}
          />
          <Route
            path="grab"
            element={<Grab />}
          />
          <Route
            path="grab/customer"
            element={<Grabcustomer />}
          />
          <Route
            path="grab/driver"
            element={<Grabdriver />}
          />
          <Route
            path="maxim"
            element={<Maxim />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
