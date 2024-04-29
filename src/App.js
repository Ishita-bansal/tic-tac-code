import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Product from "./components/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from "./components/contactus";
import pdf from "./components/images/tictacmenu.pdf";
import "./components/style.css";
import Viewproduct from "./components/viewproduct";
import Addtocart from "./components/addtocart";
import Checkout from "./components/checkout";
import Signup from "./components/signup";
import Login from "./components/login";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
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
          <Route path="/product" element={<Product/>}/>
          <Route path="/viewproduct/:id" element={<Viewproduct/>}/>
          <Route path="/addtocart" element={<Addtocart/>} />
          <Route path="/checkout" element = {<Checkout/>} />
          <Route path="signup" element = {<Signup/>} />
          <Route path="/login" element = {<Login/>}/>
        </Routes>
        <button onClick={handleDownload} className="menubtn">
          Menu
        </button>
        <Footer />
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
