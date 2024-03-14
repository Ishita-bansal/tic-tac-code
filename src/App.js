import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from "./components/contactus";
import Prices from "./components/prices";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Hero /> */}
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/homepage" element={<Hero/>} />
           <Route path="/AboutUs" element={<AboutUs/>}/>
           <Route path="/contactus" element={<Contactus/>}/>
           <Route path="/prices" element={<Prices/>}/>
        </Routes>
       <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
