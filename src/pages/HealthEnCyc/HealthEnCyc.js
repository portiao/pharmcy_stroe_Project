import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./reset.css";
import "./healthEnCyc.css";

const iconList = [
  "心臟",
  "腎臟",
  "肝臟",
  "肺臟",
  "腸胃",
  "泌尿道",
  "腦神經",
  "骨、關節",
  "牙齒、口腔",
  "眼睛",
  "耳鼻喉",
  "皮膚",
  "飲品百科",
  "身心百科",
  "營養百科",
];

function HealthEnCyc() {
  return (
    <>
      <div>
        <img
          className="healthQPic"
          src="./images/photo/jamie-street-vcn2ndJ5LwE-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="rightSideAll">
        <div className="breadWithCate">
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
          </div>
          {/* 側邊類別欄位 */}
          <div className="HealthCateAll">
            <div className="healthLineAndKnowledge">
              <div className="healthLineP"></div>
              <p className="healthKnowledge">保健知識</p>
            </div>
            <div className="healthAllCate">
              <div className="healthArrowP">
                <p>保健百科</p>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
              <div className="healthArrowP">
                <p>症狀篩檢</p>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
              <div className="healthArrowP">
                <p>醫院 | 診所</p>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="allClassButtonHealth">
          {/* 保健百科title */}
          <div className="classButtonHealth">
            <p>保健百科</p>
          </div>

          {/* 保健百科 */}
          <div className="forIconList lineTopForTitle">
            <div className="line1icon">
              {iconList.map((v, i) => (
                <div className="allIcon" key={i}>
                  <div className="liImg ">
                    <a
                      className="chandePageEnc"
                      href={`https://www.youtube.com/#${v}`}
                      target="_blank"
                    >
                      <img src={`./images/encyclopedia/${v}.png`} alt={v} />

                      <p>{v}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthEnCyc;
