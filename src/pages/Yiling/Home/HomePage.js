import "./homePage.css";

// 引入page
import PHeader from "../PHeader/PHeader"; //header
import PopularProduct from "../PopularProductPage/PopularProduct"; //熱門商品輪播
import NewsPage from "../Newsnews/NewsPage"; //最新消息
import Encyclopedia from "../Encyclopedia/Encyclopedia"; //百健保科
import AboutUS from "../AboutUs/AboutUS"; //關於我們
import Link from "../ContentLink/Link"; //相關連結

function HomePage() {
  return (
    <div className="homePage">
      <div className="headerBack">
        <PHeader />
      </div>
      <PopularProduct />
      <NewsPage />
      <Encyclopedia />
      <div className="aboutUsMM">
        <AboutUS />
      </div>
      <div className="contentLink">
        <Link />
      </div>
    </div>
  );
}

export default HomePage;
