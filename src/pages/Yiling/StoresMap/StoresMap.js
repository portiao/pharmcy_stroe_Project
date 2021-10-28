import React, { useState } from "react";
import "./storesMap.css";
import { GoSearch } from "react-icons/go"; //引用search icon
import CardStores from "../../../components/Yiling/StoresMap/CardStores"; //門市卡片


//引入元件
// import Navbar from "../Navbar/Navbar"; //共用元件 Nav
import SelectTagStore from "../../../components/Yiling/StoresMap/SelectTagStore"; //下拉選單

function StoresMap() {
  const [storesMapCity, setStoresMapCity] = useState("");
  const [storesMapSite, setStoresMapSite] = useState("");

  return (
    <>
      {/* <Navbar /> */}
      <div className="storesMapAround">
        <div className="pageIII">
          {/* 麵包屑 */}
          <div className="breadListP">
            <a href="">
              <p>首頁</p>
            </a>
            <p className="arrowarooo">{">"}</p>
            <a href="">
              <p>關於我們</p>
            </a>
            <p className="arrowarooo">{">"}</p>
            <a href="">
              <p>門市資訊</p>
            </a>
          </div>

          <div className="classButtonStore">
            <p>門市資訊</p>
          </div>
        </div>
        {/* 縣市|區域|搜尋欄 */}
        <div className="selectAndInputAroundTT">
          <div className="selectAndInputAround">
            <div>
              <SelectTagStore
                storesMapCity={storesMapCity}
                setStoresMapCity={setStoresMapCity}
                storesMapSite={storesMapSite}
                setStoresMapSite={setStoresMapSite}
              />
            </div>
            <div className="useGapForSearch">
              <input
                className="storesInputMap"
                placeholder="店名、店家所屬道路名稱"
              />
              <button className="searchIconStores">
                <GoSearch />
              </button>
            </div>
          </div>
        </div>
        {/* 地址卡片區 */}
        <div className="cardPosition">
          <CardStores />
          <CardStores />
          <CardStores />
          <CardStores />
          <CardStores />
          <CardStores />
          <CardStores />
          <CardStores />
          <CardStores />
          <CardStores />
          <CardStores />
          <CardStores />
        </div>
      </div>
      
      
    </>
  );
}

export default StoresMap;
