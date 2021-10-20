import "./App.css";

// 引入page
import PHeader from "./pages/PHeader/PHeader";
import PopularProduct from "./pages/PopularProductPage/PopularProduct";

function App() {
  return (
    <div className="App">
      <div className="headerBack">
        <PHeader />
      </div>
      <PopularProduct />
    </div>
  );
}

export default App;
