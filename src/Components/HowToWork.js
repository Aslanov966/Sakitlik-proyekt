import React from "react";
import HowToWorkList from "./HowToWorkList";
import cv from "../Images/cv.jpg";
import sorgu from "../Images/sorgu.png";
import coin from "../Images/amico.png";
import qurasdirma from "../Images/qurasdirma.png";
import key from "../Images/key.png";
import contracts from "../Images/rafiki.png";
import "../Css-files/howtowork.css";

export default function HowToWork() {
  return (
    <div className="howtowork">
      <div className="container">
        <div className="howtowork-core">
          <p className="howtowork-head">Biz Necə işləyirik ?</p>
          <button>Sifariş Göndər</button>
        </div>
        <div className="howtowork-body">
          <div className="howtoworklist-1">
            <HowToWorkList id="1" img={cv} text="Bir vəzifəyə qərar veririk" />
            <HowToWorkList id="2" img={sorgu} text="Biz düzgün həll təklif edirik" />
            <HowToWorkList id="3" img={coin}text="Biz büdcəni müzakirə edirik və lazım gəldikdə düzəlişlər edirik."/>
          </div>
          <div className="howtoworklist-2">
          <HowToWorkList id="6" img={qurasdirma} text="Quraşdırmanı həyata keçiririk. Biz işi çatdırırıq." />
            <HowToWorkList id="5" img={contracts} text="Müqaviləni imzalayırıq, siz bunu xüsusi bir ərizə vasitəsilə onlayn edə bilərsiniz" />
            <HowToWorkList id="4" img={key}text="Açar təslim xidmət sifariş edildiyi təqdirdə biz obyektdə nəzarət ölçülərini həyata keçiririk."/>
          </div>
        </div>
      </div>
    </div>
  );
}
