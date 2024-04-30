import React,{useEffect,useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Product from "./components/product";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contactus from "./components/contactus";
import pdf from "./components/images/tictacmenu.pdf";
import "./components/style.css";
import Viewproduct from "./components/viewproduct";
import Addtocart from "./components/addtocart";
import Checkout from "./components/checkout";
import Signup from "./components/signup";
import Login from "./components/login";
import { app } from "./firebase";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import menuimg from "./components/images/menu.png";
import { Tooltip,IconButton } from "@mui/material";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function App() {
   const [loggeduser,setloggedUser] = useState();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Menu.pdf";
    link.click();
    window.open(pdf, "_blank");
  };
 
  useEffect(()=>{
   const auth = getAuth(app);
   const unsubscribe = onAuthStateChanged(auth,(user)=>{
         if(user){
          console.log("user is LoggedIn");
          setloggedUser(user);
         }
         else{
          console.log("user is not login");
         }
   })
   return ()=>unsubscribe();
  },[])



console.log('loggeduser==>',loggeduser)

  const PrivateRouter = ({element}) => {
     return loggeduser ? element : Navigate('/login')
  }

  return (
    <div className="appdiv">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/homepage" element={<Hero />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/viewproduct/:id" element={<Viewproduct/>}/>
          <Route path="/addtocart" element={<Addtocart/>} />
          <Route path="checkout" element={<PrivateRouter element={<Checkout/>} />} />
          <Route path="signup" element = {<Signup/>} />
          <Route path="/login" element = {<Login/>}/>
        </Routes>
        {/* > */}

<Tooltip title="click to download the menu">
  <button onClick={handleDownload} className="menubtn" style={{position:'fixed'}}>
          <img width="40px" src={menuimg} alt="image" />
        </button>
</Tooltip>
        <Footer />
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
