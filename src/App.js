import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Stake from "./Pages/Stake/Stake";

function App() {
  return (
    <div className="App">
      <Header />
      <Stake />
      <Footer />
    </div>
  );
}

export default App;
