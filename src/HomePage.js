import "./homePage.css";

// 引入page
import Navbar from "./pages/Navbar/Navbar"; //共用元件 Nav
import PHeader from "./pages/PHeader/PHeader"; //header
import PopularProduct from "./pages/PopularProductPage/PopularProduct"; //熱門商品輪播
import NewsPage from "./pages/Newsnews/NewsPage"; //最新消息
import Encyclopedia from "./pages/Encyclopedia/Encyclopedia"; //百健保科
import AboutUS from "./pages/AboutUs/AboutUS"; //關於我們
import Link from "./pages/ContentLink/Link"; //相關連結
import Footer from './pages/Footer/Footer'; //共用元件 Footer

function HomePage() {
  return (
    <div className="homePage">
      {/* <Navbar/> */}
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
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
