import React, { useState, useEffect } from "react";
import { GoogleKey } from "./Key";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faStreetView } from "@fortawesome/free-solid-svg-icons";

// 標記樣式
const AnyReactComponent = ({ text, src }) => (
  <div>
    {text}
    <FontAwesomeIcon icon={src} size="2x" style={{ color: "red" }} />
  </div>
);

function StoresMap(props) {
  // 方法的集合(目前用來算距離)
  const [mapApi, setMapApi] = useState({});
  //載入資料庫狀態(fetch使用)
  const [stores, setStores] = useState([]);
  //目前位置
  const [getGps, setGetGps] = useState({
    lat: 25.04,
    lng: 121.5,
  });
  // 地圖初始中心點跟放大倍率
  const defaultProps = {
    center: {
      lat: 25.04,
      lng: 121.5,
    },
    zoom: 11,
  };
  //人物icon是否顯示的狀態
  const [peopleShow, setPeopleShow] = useState(false);
  //最近門市是否顯示對照figma
  const [storesLocalShow, setStoresLocalShow] = useState(false);
  //門市距離的狀態(最近門市)
  const [storesState, setStoresState] = useState([]);

  // 方法的集合(目前用來算距離)
  const apiHasLoaded = (map, maps) => {
    setMapApi(maps);
  };

  //顯示輸入框的狀態
  const [inputValue, setInputValue] = useState("");

  //fetch資料庫的方法
  //抓取Node.js門市資訊→透過googleapi解析座標→把資訊更新到React門市資訊的狀態
  const fetchSql = async () => {
    const result = await fetch(
      `http://localhost:3001/stores-list/api/list`
    ).then((res) => res.json());
    // console.log(result.rows);
    //setStores(result.rows);
    //let location = await fetchLatLng("總統府");

    //抓取資料庫中的地址遍瀝它
    //創造新陣列(展開運算子)
    const newStores = [...result.rows];

    for (let i = 0; i < newStores.length; i += 1) {
      newStores[i].location = await fetchLatLng(newStores[i].s_address);
    }

    setStores(newStores);
  };
  useEffect(() => {
    fetchSql();
  }, []);

  //地址轉經緯度
  const fetchLatLng = async (addr) => {
    const result = await fetch(
      `https://maps.google.com/maps/api/geocode/json?&address=${addr}&result_type=street_address&language=zh-TW&sensor=true&key=${GoogleKey}`
    ).then((res) => res.json());
    // console.log(result.results[0].geometry.location)
    return result.results[0].geometry.location;
  };

  //定位 getG
  const getG = () => {
    //要等門市資訊fetch完成才能執行定位，卡條件stores.length !== 0
    if (navigator.geolocation && stores.length !== 0) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setGetGps(pos);
        setPeopleShow(true);

        //拷貝門市資訊
        const newStores = [...stores];
        for (let i = 0; i < newStores.length; i++) {
          //加入計算距離的參數 (人 ,地點)
          newStores[i].distance = await listDistanceMatrixService(
            pos,
            newStores[i].location
          );
          //console.log(newStores[i].distance, i);
        }
        //console.log(newStores);

        //依照位置排序
        newStores.sort((a, b) => {
          // 陣列.sort()是排序功能
          return a.distance.value - b.distance.value; //a-b是小到大,b-a是大到小
        });

        setStoresState(newStores);//排序過後的門市資訊放入狀態
        setStoresLocalShow(true); //最近門市已找到(true)
        setInputValue(newStores[0].sName);//輸入框放入最近門市的名稱
      });
    } else {
    }
  };
  //計算距離
  async function listDistanceMatrixService(originAddress, destinationAddress) {
    // 初始化DistanceMatrixService,參考-> https://developers.google.cn/maps/documentation/javascript/distancematrix?hl=zh-cn
    const service = new mapApi.DistanceMatrixService();
    // 建立請求物件request
    const request = {
      //屬性可參考->https://www.oxxostudio.tw/articles/201810/google-maps-19-directions.html
      origins: [originAddress], //起點位置
      destinations: [destinationAddress], //目標位置
      travelMode: mapApi.TravelMode.DRIVING, //時間用開車去算,但我只看距離
      unitSystem: mapApi.UnitSystem.METRIC, //距離單位系統有 UnitSystem.METRIC ( 公里 ) 和 UnitSystem.IMPERIAL ( 英里 ) 兩個選項，預設為 UnitSystem.METRIC。
      avoidHighways: false, //忽略高速公路，可設定 true 或 false。
      avoidTolls: false, //忽略收費公路，可設定 true 或 false。
    };
    // 取得結果
    let distance = service.getDistanceMatrix(request).then((response) => {
      //console.log(response);
      return response.rows[0].elements[0].distance; // 把距離的參數return出去到外層
    });
    return distance; // 把距離的參數return出去到函數外面
  }
  //顯示input值
  const inputEnter = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {/* <FontAwesomeIcon icon={faStreetView} />
            <FontAwesomeIcon icon={faMapSigns} /> */}
      {/* <AnyReactComponent text={'123'} src={faStreetView}/>
            <AnyReactComponent text={'123'} src={faMapSigns}/> */}
      <div>
        <button
          onClick={() => {
            getG();
          }}
        >
          定位
        </button>
        {/* 輸入地址  onKeyup是鍵盤事件 */}
        <input
          type="text"
          onChange={(e) => {
            inputEnter(e);
          }}
          value={inputValue}
        />
        {storesLocalShow && (
          <p>
            {storesState[0].sName},{storesState[0].s_address},
            {storesState[0].sLocal_phone},{storesState[0].s_time}
          </p>
        )}
      </div>
      <div style={{ height: "80vh", width: "50%" }}>
        <GoogleMapReact
          center={getGps}
          bootstrapURLKeys={{ key: GoogleKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
        >
          {/* <AnyReactComponent lat={25.04} lng={121.5} text="My Marker" src={faStreetView}/> */}
          {stores.map((v, i) => (
            <AnyReactComponent
              key={v.sId}
              lat={v.location.lat}
              lng={v.location.lng}
              text={v.sId}
              src={faMapPin}
            />
          ))}
          {peopleShow && (
            <AnyReactComponent
              lat={getGps.lat}
              lng={getGps.lng}
              text={""}
              src={faStreetView}
            />
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default StoresMap;
