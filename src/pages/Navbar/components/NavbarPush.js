import React, { useState } from "react";
import "./navbarPush.css";
import { Link } from "react-router-dom";

import { RiArrowDropRightLine } from "react-icons/ri"; //右邊箭頭

const iconList = [
  { enName: "/HealthEnIndex/heart", chName: "心臟" },
  { enName: "/HealthEnIndex/kidney", chName: "腎臟" },
  { enName: "/HealthEnIndex/liver", chName: "肝臟" },
  { enName: "/HealthEnIndex/lung", chName: "肺臟" },
  { enName: "/HealthEnIndex/stomach", chName: "腸胃" },
  {
    enName: "/HealthEnIndex/Urinary_Tract",
    chName: "泌尿道",
  },
];
const iconSick = [
  { enName: "/HealthEnIndex/heart", chName: "流鼻水" },
  { enName: "/HealthEnIndex/kidney", chName: "疲憊" },
  { enName: "/HealthEnIndex/liver", chName: "心悸" },
  { enName: "/HealthEnIndex/lung", chName: "噁心、嘔吐" },
  { enName: "/HealthEnIndex/stomach", chName: "咳嗽" },
  {
    enName: "/HealthEnIndex/Urinary_Tract",
    chName: "呼吸困難",
  },
];

function NavbarPush() {
  /*按鈕狀態 0是第一個被按下*/
  const [buttonIndex, setButtonIndex] = useState(0);

  /**icon render(渲染) */
  function iconRender(arr) {
    return (
      <div className="navforIconList">
        <div className="navline1icon">
          {arr.map((v, i) => (
            <div className="navallIcon" key={i}>
              <div className="navliImg">
                <Link to={`${v.enName}`} className="navChandePageEnc" >
                  <img
                    src={`http://localhost:3000/images/encyclopedia/${v.chName}.png`}
                    alt={v.chName}
                  />
                  <p>{v.chName}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="navPushDouble">
        <div className="navPushPsh">
          <div className="buttonPushName">
            <button
              onClick={() => {
                setButtonIndex(0);
              }}
              className={
                buttonIndex === 0 ? "buttonBlue button-blueFocus" : "buttonBlue"
              }
            >
              <p>保健百科</p>
              <RiArrowDropRightLine />
            </button>

            <button
              onClick={() => {
                setButtonIndex(1);
              }}
              className={
                buttonIndex === 1 ? "buttonBlue button-blueFocus" : "buttonBlue"
              }
            >
              <p>症狀篩檢</p>
              <RiArrowDropRightLine />
            </button>
            <a
              href="https://yahoo.com.tw"
              target="_blank"
              className="changeHos"
            >
              <button
                onClick={() => {
                  setButtonIndex(2);
                }}
                className={
                  buttonIndex === 2
                    ? "buttonBlue button-blueFocus Hos"
                    : "buttonBlue Hos"
                }
              >
                <p>醫院 | 診所</p>
                <RiArrowDropRightLine />
              </button>
            </a>
          </div>
          <div>
            {buttonIndex === 0 ? iconRender(iconList) : iconRender(iconSick)}
          </div>
        </div>
        <div className="arrowEnterAgain">
          <Link to={buttonIndex === 0 ? "/HealthEnCyc" : "#"}
          >
            <img src="http://localhost:3000/images/photo/enter.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavbarPush;
