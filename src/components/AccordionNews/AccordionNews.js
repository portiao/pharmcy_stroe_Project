import React, { Component, useState, useEffect } from "react";
import "./accordionNews.css";

const data = [
  {
    title: "2021-11-21 【 新店開幕 】 11 / 21 林口文化店 盛大開幕  好康大放送",
    sTime: "【 時間 】 2021-11-21 10:00 a.m",
    sPhone: "【 電話 】 02 2608 0711",
    sAddress: "【 地址 】 新北市林口區文化三路一段425號 ",
  },
  {
    title: "2021-11-21 【 新店開幕 】 11 / 21 林口文化店 盛大開幕  好康大放送",
    sTime: "【 時間 】 2021-11-21 10:00 a.m",
    sPhone: "【 電話 】 02 2608 0711",
    sAddress: "【 地址 】 新北市林口區文化三路一段425號",
  },
  {
    title: "2021-11-21 【 新店開幕 】 11 / 21 林口文化店 盛大開幕  好康大放送",
    sTime: "【 時間 】 2021-11-21 10:00 a.m",
    sPhone: "【 電話 】 02 2608 0711",
    sAddress: "【 地址 】 新北市林口區文化三路一段425號",
  },
  {
    title: "2021-11-21 【 新店開幕 】 11 / 21 林口文化店 盛大開幕  好康大放送",
    sTime: "【 時間 】 2021-11-21 10:00 a.m",
    sPhone: "【 電話 】 02 2608 0711",
    sAddress: "【 地址 】 新北市林口區文化三路一段425號",
  },
  {
    title: "2021-11-21 【 新店開幕 】 11 / 21 林口文化店 盛大開幕  好康大放送",
    sTime: "【 時間 】 2021-11-21 10:00 a.m",
    sPhone: "【 電話 】 02 2608 0711",
    sAddress: "【 地址 】 新北市林口區文化三路一段425號",
  },
];

const AccordionItem = (props) => {
  const [heightItem, setHeightItem] = useState(0);
  useEffect(() => {
    setHeightItem(
      props.visable
        ? document.getElementById(`item_${props.index}`).scrollHeight
        : 0
    );
  });
  const { item, index, setVisable } = props;
  return (
    <div className="accordion-item" onClick={() => setVisable(index)}>
      <div className="title">{item.title}</div>
      <div
        className="content-box"
        style={{ height: heightItem }}
        id={`item_${index}`}
      >
        <div className="newBox">
          <p>{item.sTime}</p>
          <p>{item.sPhone}</p>
          <p> {item.sAddress}</p>
        </div>
      </div>
    </div>
  );
};
const Accordion = () => {
  const [visable, setVisable] = useState([true, false, false, false, false]);
  const setVisableChild = (key) => {
    setVisable(visable.map((one, index) => (key == index ? true : false)));
  };
  return (
    <div className="accordion">
      {data.map((item, index) => {
        return (
          <AccordionItem
            item={item}
            key={index}
            index={index}
            visable={visable[index]}
            setVisable={setVisableChild}
          />
        );
      })}
    </div>
  );
};
export default Accordion;
