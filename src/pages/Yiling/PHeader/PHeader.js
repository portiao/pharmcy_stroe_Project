import React from "react";
import "./pHeader.css";


//元件引入
import AirQuality from "../../../components/Yiling/AirQ/AirQuality"; //空氣品質
import ActivePage from "../../../components/Yiling/ActivePage/ActivePage"; //活動頁籤

const Indexbanner = "./images/photo/indexbanner.jpg" //Banner圖

function PHeader() {
  return (
    <div className="headerBack">
      <div className="changeSpace">
        <img
          className="indexbanner"
          src={Indexbanner}
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
