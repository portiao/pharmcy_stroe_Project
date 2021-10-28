import React from "react";
import "./activePage.css";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown} from "react-icons/md";


function ActivePage() {
  return (
    <>
      <div className="active">
        <div className="activeDate">
          <p className="activeP1">2021</p>
          <p className="activeP2">11.21</p>
        </div>
        <div className="activeNews">
          <p>【新店開幕】 林口文化店即將在11/21(日)盛大開幕囉！！</p>
        </div>
        <div className="activeArrow">
          <p className="activeLine">
            <MdArrowDropUp />
          </p>
          <p className="activeLine2">
            <MdArrowDropDown />
          </p>
        </div>
      </div>
    </>
  );
}

export default ActivePage;
