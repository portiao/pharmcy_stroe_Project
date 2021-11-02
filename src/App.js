/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./pages/Navbar/Navbar"; //桌機導覽列
//import MobileNavBar from "./components/Yiling/MobileNavBar/MobileNavBar"; //手機導覽列
import HomePage from "./pages/Yiling/Home/HomePage"; //引入首頁
import StoresMap from "./pages/Yiling/StoresMap/StoresMap"; //門市資訊
import HealthEnCyc from "./pages/Yiling/HealthEnCyc/HealthEnCyc"; //保健百科頁面
import HealthEnIndex from "./pages/Yiling/HealthEnIndex/HealthEnIndex"; //保健百科頁面的內頁
import Select_shop from "./pages/Yiling/Select_Shop/Select_shop"; //處方籤預約領藥
import Footer from "./components/Footer/Footer"; //Footer
import PortiaAllPage from './pages/Yiling/PortiaAllPage/PortiaAllPage' //所有頁面

function App() {
  const [closeStore, setCloseStore]= useState({}) //給梓庭抓最近門市資料
  return (
    <Router>
      <>
        <Navbar />
        {/* <MobileNavBar /> */}
        {/* <HomePage /> */}
        {/* 主要內容 */}
        <PortiaAllPage
          setCloseStore={setCloseStore}
        />
        {/* <Switch>
          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route path="/StoresMap">
            <StoresMap />
          </Route>
          <Route path="/HealthEnCyc">
            <HealthEnCyc />
          </Route>
          <Route path="/HealthEnIndex/:Id">
            <HealthEnIndex />
          </Route>
          <Route path="/Select_shop">
            <Select_shop />
          </Route>
        </Switch> */}
        <Footer />
      </>
    </Router>
  );
}

export default App;
