import React from "react";
import "./newsPage.css";
import "./reset.css"

import AccordionNews from "../../components/AccordionNews/AccordionNews";

function NewsPage() {
  return (
    <>
      <h1 className="newsTitle">消息專區</h1>
      <h1 className="text-divider2">NEWS</h1>
      <div className="allNews">
        <div className="doctorPic">
          <img src="../../../images/photo/newsDoctor.jpg"></img>
        </div>
        <div className="newPadding">
          <AccordionNews />
        </div>
      </div>
    </>
  );
}

export default NewsPage;
