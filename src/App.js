import React from "react";

import "./App.css";

import HomePage from "./HomePage"; //引入首頁
import StoresMap from "./StoresMap/StoresMap"; //門市資訊

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <StoresMap />
    </div>
  );
}

export default App;
