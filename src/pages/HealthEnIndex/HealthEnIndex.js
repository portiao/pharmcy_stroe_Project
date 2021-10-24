import React from "react";
import "./healthEnIndex.css";

function HealthEnIndex() {
  return (
    <>
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
    </>
  );
}

export default HealthEnIndex;
