import React from "react";
import "./reset.css"
import "./pHeader.css";


//元件引入
import AirQuality from "../../components/AirQ/AirQuality"; //空氣品質
import ActivePage from "../../components/ActivePage/ActivePage"; //活動頁籤

function PHeader() {
  return (
    <div>
      <div className="changeSpace">
        <img
          className="indexbanner"
          src="../../../images/photo/indexbanner.jpg"
        ></img>
        <div className="activeMove" >
          <ActivePage />
        </div>
      </div>
      <div className="rightBox">
        <AirQuality />
      </div>
    </div>
  );
}

export default PHeader;
