import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from "./components/contactus";
import pdf from "./components/images/tictacmenu.pdf";
import "./components/style.css";


function App() {



  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Menu.pdf";
    link.click();
    window.open(pdf, "_blank");
  };
  return (
    <div className="appdiv">
      <BrowserRouter>
        <Navbar />
        {/* <Hero /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/homepage" element={<Hero />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/Blog" element={<Blog/>}/>
        </Routes>
        <button onClick={handleDownload} className="menubtn">
          Menu
        </button>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
