import "./App.css";

// 引入page
import PHeader from "./pages/PHeader/PHeader"; //header
import PopularProduct from "./pages/PopularProductPage/PopularProduct";//熱門商品輪播
import NewsPage from "./pages/Newsnews/NewsPage"; //最新消息
import Encyclopedia from "./pages/Encyclopedia/Encyclopedia"; //百健保科

function App() {
  return (
    <div className="App">
      <div className="headerBack">
        <PHeader />
      </div>
      <PopularProduct />
      <NewsPage/>
      <Encyclopedia/>
    </div>
  );
}

export default App;
