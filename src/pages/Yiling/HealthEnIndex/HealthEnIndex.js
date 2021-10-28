import React from "react";
import "./healthEnIndex.css";

const data = [
  {
    name: "二尖瓣脫垂",
    text: "二尖瓣位於左心房以及左心室之間，當心臟舒張時，二尖瓣打開，讓左心房的血液流到左心室；心臟收縮時，血液流向主動脈，同時二尖瓣關閉，可以讓血液不會逆流回左心房。一旦心臟收縮時，二尖瓣向左心房凸起，就稱為二尖瓣脫垂。",
  },
  {
    name: "低血壓",
    text: "低血壓就是一般所謂的血壓低，英文寫作hypotension。低血壓的定義，是收縮壓低於90毫米汞柱（mmHg）、或是舒張壓低於60毫米汞柱（mmHg）。低血壓好發在年輕偏瘦的女性族群，男性族群仍會得到，往往都是體檢時才會發現。病人如果長期處在低血壓的狀態時，心臟必須要更努力才能送出足夠的血液量，所以心跳會較正常人更快，病人甚至感受到自己的心跳，也就一般所稱的心悸。",
  },
  {
    name: "肝冠狀動脈心臟病",
    text: "冠狀動脈心臟病（冠心症）可分成急性與慢性，慢性冠心症大多為心絞痛，而急性冠心症主要為心肌梗塞。有家族史、肥胖、有高血壓糖尿病等慢性疾病、抽菸的人是高危險族群。可使用藥物進行治療，動脈血管阻塞較嚴重的話則必須動手術，裝設冠狀動脈支架或冠狀動脈繞道手術。",
  },
  {
    name: "心律不整",
    text: "心律不整是因為心臟電力傳導功能異常所引起的各種症狀。正常情況下，心臟跳動是由右心房的特殊區域（醫學專有名詞稱為竇房結）控制，經由心臟傳導的路徑（包含醫學專有名詞：房室結、希氏徑等）把電流刺激由心房傳到心室，引起心臟的收縮，讓心臟可以維持正常搏動，維持穩定的血壓及供應身體所需的血液。",
  },
  {
    name: "心悸",
    text: "心悸簡單來說就是可以感受到自己的心跳，覺得自己心臟怦怦跳，不管是心跳太快、太慢，或不規則亂跳時，都包含在內。心悸可以在正常人健康的心臟發生，主要是心情緊張、焦慮，心臟收縮突然加強所引起。如果是心臟疾病所引起，心跳可能有突然停止的感覺、或者是突發性的心跳速率加快，每分鐘超過100多下。除發生昏倒需要立即就醫外，一般稍作休息後就會恢復正常。",
  },
  {
    name: "心房顫動",
    text: "心房顫動或稱心房纖維顫動，可簡稱為房顫。心房顫動是一種常見的心律不整現象，起因於心房取代正常負責發出電信號的竇房結，導致發作時心臟會出現快速紊亂的跳動，最快甚至每分鐘跳300下到",
  },
  {
    name: "心肌梗塞",
    text: "心肌梗塞是一種急性且非常嚴重的心臟疾病，原因在於冠狀動脈阻塞導致氧氣和養分無法輸送到它所供應的心肌細胞，造成心臟組織永久受損壞死，嚴重甚至休克或死亡。",
  },
];

function HealthEnIndex() {
  return (
    <>
      <div>
        <img
          className="healthQPic"
          src="./images/photo/jamie-street-vcn2ndJ5LwE-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="thisHealthPage">
        <div className="indexAllContent">
          {/* 麵包屑 */}
          <div className="breadListHealth">
            <a href="">
              <p>首頁</p>
            </a>
            <p className="arrowHealth">{">"}</p>
            <a href="">
              <p>保健知識</p>
            </a>
            <p className="arrowHealth">{">"}</p>
            <a href="">
              <p>保健百科</p>
            </a>
            <p className="arrowHealth">{">"}</p>
            <a href="">
              <p>心臟</p>
            </a>
          </div>
          <div className="IncludeImgDetail">
            <p className="heartHealthIndex">心臟</p>
            <img
              className="imgHeartDetail"
              src="./images/photo/heart img.png"
              alt="心臟詳細圖"
            />
          </div>
        </div>
        <div className="pIndexAll">
          {/* 要回傳的值用map方法回傳 ，變歷變資料→v*/}
          {data.map((v, i) => {
            return (
              <div className="pIndexAllOne" key={i}>
                <p className="pIndex">{v.name}</p>
                <p className="pIndexContent">{v.text}</p>
              </div>
            );
          })}

          {/* <div className="pIndexAllOne">
            <p className="pIndex">二尖瓣脫垂</p>
            <p className="pIndexContent">
              二尖瓣位於左心房以及左心室之間，當心臟舒張時，二尖瓣打開，讓左心房的血液流到左心室；心臟收縮時，血液流向主動脈，同時二尖瓣關閉，可以讓血液不會逆流回左心房。一旦心臟收縮時，二尖瓣向左心房凸起，就稱為二尖瓣脫垂。
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HealthEnIndex;
