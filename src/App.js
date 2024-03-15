import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from "./components/contactus";
import "./components/style.css";
function App() {
  return (
    <div className="appdiv">
      <BrowserRouter>
        <Navbar />
        {/* <Hero /> */}
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/homepage" element={<Hero/>} />
           <Route path="/AboutUs" element={<AboutUs/>}/>
           <Route path="/contactus" element={<Contactus/>}/>
        </Routes>
       <button className="menubtn">Menu</button>
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
