import logo from "./logo.svg";
import "./App.css";
import Activity from "./components/Activity/Activity";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "50px", height: "50px", margin: "50px" }}
          src="https://www.logolynx.com/images/logolynx/f6/f6579c6e9df16187abe09e518e66f004.png"
          alt=""
        />
        <h1>Pro Active Club</h1>
      </div>
      <Activity></Activity>
      <Footer></Footer>
    </div>
  );
}

export default App;
