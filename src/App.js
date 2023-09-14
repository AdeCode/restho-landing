import Banner from "./components/Banner";
import About from "./components/About";
import NewItem from "./components/NewItem";
import FoodItem from "./components/FoodItem";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Banner/>
      <About/>
      <NewItem/>
      <FoodItem/>
      <Footer/>
    </div>
    
  );
}

export default App;
