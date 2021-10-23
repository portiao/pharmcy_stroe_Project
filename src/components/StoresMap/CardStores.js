import React from "react";
import "./cardStores.css";

function CardStores() {
  return (
    <>
      <div className="storeAllPos cardShadowPo">
        <div className="linePosStoes"></div>
        <div className="storeInPos">
          <p className="storeNamePos">中山吉林店</p>
          <div className="addressCardPos">
            <p className="addressNamePos">
              <span>地</span>
              <span>址：</span>
            </p>
            <p>台北市中山區吉林路371號</p>
          </div>
          <div className="addressCardPos">
            <p className="addressNamePos">
              <span>電</span>
              <span>話：</span>
            </p>
            <p>02-28760588</p>
          </div>
          <div className="addressCardPos">
            <p className="addressNamePos">營業時間：</p>
            <p>09:00~22:00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardStores;
