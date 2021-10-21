import React from "react";
import "./navbar.css";

import { BsCart2 } from "react-icons/bs"; //購物車
import { FaRegUserCircle } from "react-icons/fa"; //會員
import { FiHeart } from "react-icons/fi"; //愛心
import { MdOutlineAssignment } from "react-icons/md"; //處方籤

function Navbar() {
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
          <div className="navbarLinkDesTop2">
            <a href="">
              <p className="navbarIconLine1">線上購物</p>
            </a>
            <a href="">
              <p className="navbarIconLine1">保健知識</p>
            </a>
            <a href="">
              <p className="navbarIconLine1">消息專區</p>
            </a>
            <a href="">
              <p>關於我們</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
