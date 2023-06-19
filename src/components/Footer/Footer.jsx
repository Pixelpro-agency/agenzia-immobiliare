import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Il Nostro Obiettivo È Aiutare Le Persone <br />
            A Trovare Il Posto Migliore Dove Vivere 
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Informazioni</span>
          <span className="secondaryText">Piazza ---- 00000 Roma - Italia</span>
          <div className="flexCenter f-menu">
            <span>Proprietà</span>
            <span>Servizi</span>
            <span>Prodotti</span>
            <span>Su Di Noi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
