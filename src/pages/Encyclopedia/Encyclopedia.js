import React from "react";
import "./encyclopedia.css";


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

function Encyclopedia() {
  return (
    <div>
      <div className="encTitle">
        <h1 className="text-divider3">保健百科</h1>
      </div>
      <div className="forIconList">
        <div className="line1icon">
          {iconList.map((v, i) => (
            <div className="allIcon" key={i}>
              <div className="liImg">
                <a className="chandePageEnc" href={`https://www.youtube.com/#${v}`} target="_blank">
                  <img src={`./images/encyclopedia/${v}.png`} alt={v} />

                  <p>{v}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Encyclopedia;
