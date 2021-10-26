import './Select_shop.css'
import Googlemap from './Googlemap.js'

const Background ='./images/photo/預約領藥背景圖.jpg'
const Placeholder="./images/photo/placeholder.png" //map定位地圖

function Select_shop() {
  return (
    <>
      <div className="zi-select-shop">
        <img className="zi-select-shop-background" src={Background} alt="" />
        <div className="zi-select-shop-form-list">
          <div className="zi-select-shop-card-content">
            <h1>選取領藥門市</h1>
            <p>可自行選取門市，也可自動找尋最近門市</p>
            <div className="zi-select-shop-card-line"></div>
            <div className="zi-select-shop-autofindbtn">
              <img src={Placeholder} alt="" />
              自動搜尋最近門市
            </div>
            <form className="zi-select-shop-form-content" action="">
              <label className="zi-select-shop-city-label" for="city">
                城市
              </label>
              <select name="city" id="city">
                <option value="0">請選取指定城市</option>
                <option value="0">台北市</option>
                <option value="1">新北市</option>
                <option value="2">基隆市</option>
              </select>

              <label for="area">區域</label>
              <select name="city" id="city">
                <option value="0">請選取區域</option>
                <option value="0">中正區</option>
                <option value="1">中山區</option>
                <option value="2">文山區</option>
              </select>

              <label for="city">門市</label>
              <select name="city" id="city">
                <option value="0">請選取指定門市</option>
                <option value="0">吉林中山店</option>
                <option value="1">吉林中山店</option>
                <option value="2">吉林中山店</option>
              </select>
            </form>
          </div>

          <div className="zi-select-shop-map-group">
            <div className="zi-select-shop-map-area">
              <Googlemap />
            </div>
          </div>
        </div>
        <div className="zi-select-shop-button-flex">
          <button type="submit" className="zi-select-shop-backstep">
            上一步
          </button>
          <button type="submit" className="zi-select-shop-form-submit">
            送出
          </button>
        </div>
      </div>
    </>
  )
}

export default Select_shop
