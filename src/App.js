import "./App.css";

// 引入page
import PHeader from "./pages/PHeader/PHeader"; //header
import PopularProduct from "./pages/PopularProductPage/PopularProduct";//熱門商品輪播
import NewsPage from "./pages/Newsnews/NewsPage"; //最新消息

function App() {
  return (
    <div className="App">
      <div className="headerBack">
        <PHeader />
      </div>
      <PopularProduct />
      <NewsPage/>
    </div>
  );
}

export default App;
