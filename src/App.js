import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./pages/Navbar/Navbar"; //桌機導覽列
import MobileNavBar from "./components/MobileNavBar/MobileNavBar"//手機導覽列
import HomePage from "./HomePage"; //引入首頁
import StoresMap from "./pages/StoresMap/StoresMap"; //門市資訊
import HealthEnCyc from "./pages/HealthEnCyc/HealthEnCyc"; //保健百科頁面
import HealthEnIndex from "./pages/HealthEnIndex/HealthEnIndex"; //保健百科頁面的內頁
import Select_shop from "./pages/Select_Shop/Select_shop"; //處方籤預約領藥
import Footer from "./components/Footer/Footer"; //Footer

function App() {
  return (
    <Router>
      <>
        <Navbar />
        {/* <MobileNavBar/> */}
        {/* <HomePage /> */}
        {/* 主要內容 */}
        <Switch>
          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route path="/StoresMap">
            <StoresMap />
          </Route>
          <Route path="/HealthEnCyc">
            <HealthEnCyc />
          </Route>
          <Route path="/HealthEnIndex">
            <HealthEnIndex />
          </Route>
          <Route path="/Select_shop">
            <Select_shop />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
