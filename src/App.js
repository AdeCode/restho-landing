import Banner from "./components/Banner";
import About from "./components/About";
import NewItem from "./components/NewItem";
import FoodItem from "./components/FoodItem";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <Div className="relative">
      <TopBar/>
      <Navbar/>
      <Banner/>
      <About/>
      <NewItem/>
      <FoodItem/>
      <Footer/>
    </Div>
    
  );
}

export default App;

const Div = styled.div`
    background: linear-gradient(90deg,#000,#09161d)
`


