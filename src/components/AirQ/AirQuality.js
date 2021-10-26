import React from "react";
import "./airQuality.css";

function AirQuality() {
  return (
    <>
      <div className="airCard">
        <div className="airTitle">
          <p className="airLine">
            <span className="airLineSpan">空氣品質</span>
          </p>
        </div>
        <div className="second">
          <div className="seCity">
            <p>台北市</p>
            <p className="linePadding"> | </p>
            <p>萬華區</p>
          </div>
          <div className="inputBox">
            <input type="text" placeholder="    請輸入城市名稱" />
          </div>
          <div className="seBtn">
            <button className="button-7 ">GPS</button>
            <button className="button-7">搜尋</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AirQuality;
