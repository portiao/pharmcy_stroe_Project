import React, { useState } from "react";
import "./storesMap.css";
import "./reset.css";
import { BiSearch } from "react-icons/bi"; //引用search icon

//引入元件
import Navbar from "../pages/Navbar/Navbar"; //共用元件 Nav
import SelectTagStore from "../components/StoresMap/SelectTagStore"; //下拉選單

function StoresMap() {
  const [storesMapCity, setStoresMapCity] = useState("");
  const [storesMapSite, setStoresMapSite] = useState("");

  return (
    <>
      <Navbar />
      <div className="storesMapAround">
        <div className="pageIII">
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
                <BiSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoresMap;
