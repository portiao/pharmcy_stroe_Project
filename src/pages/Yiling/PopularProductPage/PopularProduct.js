import React, { Component } from "react";
//引入套件
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//自己的CSS
import "./popularProduct.css";
//引入熱門商品
import NewPopularProduct from "../../../components/Yiling/PopularProduct/NewPopularProduct";

export default class PopularProduct extends Component {
  render() {
    const settings = {
      arrow: true,
      dots: false,
      infinite: true,
      // autoplay: true,
      // autoplaySpeed: 1500,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          // 螢幕寬度小於1700
          breakpoint: 1700,
          settings: {
            slidesToShow: 4, //一次顯示4個
            slidesToScroll: 1,
          },
        },
        {
          // 螢幕寬度小於1500
          breakpoint: 1500,
          settings: {
            slidesToShow: 3, //一次顯示3個
          },
        },
        {
          // 螢幕寬度小於1150
          breakpoint: 1150,
          settings: {
            slidesToShow: 2, //一次顯示2個
            dots: true,
          },
        },
        {
          // 螢幕寬度小於800
          breakpoint: 800,
          settings: {
            slidesToShow: 1, //一次顯示1個
            dots: true,
          },
        },
      ],
    };
    return (
      <>
        <div className="bgColorProduct">
          <h1 className="text-divider1">熱門商品</h1>
          <Slider className="hotSilder" {...settings}>
            <NewPopularProduct />
            <NewPopularProduct />
            <NewPopularProduct />
            <NewPopularProduct />
            <NewPopularProduct />
          </Slider>
          <div style={{backgroundImage: `url(http://localhost:3000/images/photo/cloud.png)`}}  className="cloud cloud-1"></div>
          <div style={{backgroundImage: `url(http://localhost:3000/images/photo/cloud.png)`}}  className="cloud cloud-2"></div>
        </div>
      </>
    );
  }
}
