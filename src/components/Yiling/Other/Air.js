import React,{useState, useEffect} from 'react'
import { GoogleKey } from './Key'

//獲取設備當前的位置 -> 取得經緯度 -> 經緯度轉換城市、區域名稱 -> 傳給Google Maps API
function Air() {

    const [getGps, setGetGps]= useState({
        lat: 0,
        lng: 0,
    })

    const [addr, setAddr] = useState({
        city: '城市',
        site: '地區',
    })

    const [aqi, setAqi] = useState(0)
    const [aqiState, setAqiState ] = useState ('')
    const [inputValue, setInputValue] = useState ('')

    // //地址解析 (函式模組化)
    //https://maps.google.com/maps/api/geocode/json?latlng=24.9787789,121.4444248&language=zh-TW&sensor=true&key=${GoogleKey}
    //result_type 一種或多種地址類型的過濾器
    const fetchAddress = async () => {
        let addrStr = {
            city: "",
            site: "",
        };

        if (getGps.lat!==0 & getGps.lng!==0){
            const result = await fetch(`https://maps.google.com/maps/api/geocode/json?latlng=${getGps.lat},${getGps.lng}&result_type=street_address&language=zh-TW&sensor=true&key=${GoogleKey}`).then(res => res.json())
            let addrApi = result.results[0].address_components
        
            //解析城市區域
            addrApi.forEach((element) => {
                        // console.log(element.types[0]);
                        if ("administrative_area_level_1" === element.types[0]) {
                          //console.log(element.long_name);
                          addrStr.city = element.long_name
                        } else if ("administrative_area_level_3" === element.types[0]) {
                          // console.log(element.long_name);
                          addrStr.site = element.long_name
                        }
            })
            //console.log(addrStr)          
            setAddr(addrStr)
        }
      }

    //導入空氣品質API Key:af2e94d5-755a-4e00-8fa5-bf85ffed4fa8
    //https://data.epa.gov.tw/api/v1/aqx_p_432?api_key=af2e94d5-755a-4e00-8fa5-bf85ffed4fa8
    const fetchAQI = async () => {
      
      if (true){
          const result = await fetch(`https://data.epa.gov.tw/api/v1/aqx_p_432?api_key=af2e94d5-755a-4e00-8fa5-bf85ffed4fa8`).then(res => res.json())
          let aqiApi = result.records
          //console.log(aqiApi.records)
          

          aqiApi.forEach((e) => {
            //console.log(e);
            if (addr.site === e.SiteName) {
              setAqi(e.AQI)
              setAqiState(e.Status)
            }
          });
          
          if (aqi === 0) {
            aqiApi.forEach((e) => {
              if (addr.city === e.County) {
                setAqi(e.AQI)
                setAqiState(e.Status)
              }
            });
          }
        }
    }
    


      const checkAddress = () =>{
          //拷貝物件
        const newAddr = JSON.parse(JSON.stringify(addr))


        if ("台" === newAddr.city.slice(0, 1)) {
            newAddr.city = newAddr.city.replace("台", "臺");
           // console.log(newAddr.city);
          }

          if (newAddr.site === "") {
            newAddr.site = newAddr.city;
          }

          if (newAddr.site.length > 2){
            newAddr.site = newAddr.site.slice(0,2)
            //console.log(newAddr.site.slice(0,2))
          }
          //物件跟物件的相等比較
          if (addr.city!== newAddr.city ||addr.site!== newAddr.site){
           setAddr(newAddr)
          }       
      }
      
      useEffect(() => {
        fetchAddress()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [getGps])

      useEffect(() => {
        checkAddress()
        fetchAQI()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [addr])
    
    //定位 getG
    const getG=()=>{
        if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(async function (position) {
                    let pos = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    };
                    setGetGps(pos);
                  });
                } else {
                  alert("不支援");
                }
    }
    
    
    //輸入值
    const inputEnter = (e) =>{
      setInputValue(e.target.value)
    }

    //搜尋
    const search = async () => {
        let addrStr = {
            city: "",
            site: "",
        };

        if (inputValue !== ''){
            const result = await fetch(`https://maps.google.com/maps/api/geocode/json?&address=${inputValue}&result_type=street_address&language=zh-TW&sensor=true&key=${GoogleKey}`).then(res => res.json())
            let addrApi = result.results[0].address_components
        
            //解析城市區域
            addrApi.forEach((element) => {
                        // console.log(element.types[0]);
                        if ("administrative_area_level_1" === element.types[0] || "administrative_area_level_2" === element.types[0]) {
                          //console.log(element.long_name);
                          addrStr.city = element.long_name
                        } else if ("administrative_area_level_3" === element.types[0]) {
                          // console.log(element.long_name);
                          addrStr.site = element.long_name
                        }
            })
            //console.log(addrStr)          
            setAddr(addrStr)
            setInputValue('')
        }
      }
      
      //鍵盤事件
      const keyUp = (e)=>{
        if(e.keyCode=== 13){
          search()
        }
      }



    return (
        <>
            {/* 輸入地址  onKeyup是鍵盤事件 */}
            <input type="text" onChange ={(e) =>{inputEnter(e)}} onKeyUp={(e)=>{keyUp(e)}} value={inputValue}/>
            {/* 定位 */}
            <input type="button" value="定位" onClick={()=>{getG()}}/>
            {/* 收尋 */}
            <input type="button" value="搜尋" onClick={() =>{search()}}/>
            {/* 城市 */}
            <p>{addr.city }</p>
            {/* 區域 */}
            <p>{addr.site}</p>
            {/* AQI */}
            <p>{(aqi === 0) ? 'AQI': aqi}</p>
            {/* 狀況 */}
            <p>{(aqiState === '') ? '狀態': aqiState}</p>

            
        </>
    )
}



export default Air







