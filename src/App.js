import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from "./pages/Navbar/Navbar"; //桌機導覽列
import HomePage from "./HomePage"; //引入首頁
import StoresMap from "./pages/StoresMap/StoresMap"; //門市資訊
import HealthEnCyc from "./pages/HealthEnCyc/HealthEnCyc"; //保健百科頁面
import HealthEnIndex from "./pages/HealthEnIndex/HealthEnIndex"; //保健百科頁面的內頁

function App() {
  return (
    <Router>
      <div className="App">
       
        <Navbar/>
        {/* <HomePage /> */}
        {/* <StoresMap /> */}
        {/* <HealthEnCyc/> */}
        <HealthEnIndex/>
      </div>
    </Router>
  );
}

export default App;
