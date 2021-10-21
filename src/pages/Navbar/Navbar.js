import React, { useState } from "react";
import "./navbar.css";

import { BsCart2 } from "react-icons/bs"; //購物車
import { FaRegUserCircle } from "react-icons/fa"; //會員
import { FiHeart } from "react-icons/fi"; //愛心
import { MdOutlineAssignment } from "react-icons/md"; //處方籤

import NavbarPush from "../../components/NavbarPush/NavbarPush"; //活動頁籤

function Navbar() {
  /*下拉式選單狀態 */
  const [buttonIndex, setButtonIndex] = useState(0);
  return (
    <>
      <div className="navbarDesTop">
        <div className="homeIconLogo">
          <img src="../../../images/Logo.jpg" alt="" />
        </div>
        <div className="navbarLinkDesTop">
          <div className="navbarLinkDesTop1">
            <p className="positionIconA">
              <MdOutlineAssignment />
              <p>處方領藥</p>
            </p>
            <div className="navbarAllIcon">
              <FiHeart />
              <BsCart2 />
              <FaRegUserCircle />
            </div>
          </div>
          <div
            className="navbarLinkDesTop2"
            onMouseEnter={() => {
              setButtonIndex(0);
            }}
          >
            <a href="">
              <p className="navbarIconLine1">線上購物</p>
            </a>

            <p
              className="navbarIconLine1"
              onMouseEnter={() => {
                setButtonIndex(1);
              }}
            >
              保健知識
            </p>

            <p
              className="navbarIconLine1"
              onMouseEnter={() => {
                setButtonIndex(2);
              }}
            >
              消息專區
            </p>

            <p
              onMouseEnter={() => {
                setButtonIndex(3);
              }}
            >
              關於我們
            </p>
          </div>
        </div>
      </div>
      <div className={buttonIndex !== 0 ? "buttonAndIconPush" : ""}>
        {buttonIndex === 1 ? <NavbarPush /> : ""}
      </div>
    </>
  );
}

export default Navbar;
