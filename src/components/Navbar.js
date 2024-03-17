import React,{useState} from 'react'
import './style.css';
import {FaBars , FaTimes} from 'react-icons/fa';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';



function Navbar(){
  const [click,setClick] = useState(false);
  const [color,setColor] = useState(false);
   const changeColor = () =>{
         if(window.scrollY >= 100){
          setColor(true);
         }
         else{
         setColor(false)
         }
   }

   window.addEventListener('scroll',changeColor)
  const handleClick = ()=> setClick(!click)
     return(
       <div className={color? 'header header-bg' : "header"}>
           <nav className='navbar'>
            <a href='/'  className='logo'>
               <img src={logo}  alt=''/>
            </a>
            <div className='hamburger' onClick={handleClick}>
              {click ? <FaTimes size={30} style={{color:'#ffffff'}}/>
               : <FaBars size={30} style={{color:'#ffffff'}}/>}  
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
             <li className='nav-item'><Link className='customlink' to="/homepage">Home</Link></li>
             <li className='nav-item'><Link className='customlink' to="/AboutUs">About Us</Link></li>
             <li className='nav-item'><Link className='customlink' to="/contactus">Contact Us</Link></li>
            </ul>
           </nav>
       </div>
     )
}

// import logo from './images/tic-tac.jpg';
// import {Link} from 'react-router-dom';
// import './style.css';
// import { useEffect} from 'react';

// function Navbar() {


//   useEffect(() => {
  
//   }, []);
//   return (
// <div class="row" style={{ background:"linear-gradient(to left, blue , crimson)",borderBottomRightRadius:'50px'}}>
//         <div class="col-md-6 p-4">
//             <img src={logo} width="100px" height="70px" alt=''/>
//         </div>
//         <div class="col-md-6" id="item">
//            <ul class="d-flex justify-content-around list-unstyled p-4 fs-4">
//             <li><Link to="/homepage">Home</Link></li>
//             <li><Link to="/AboutUs">About Us</Link></li>
//             <li><Link to="/contactus">Contact Us</Link></li>
//             <li><Link to="/">Prices</Link></li>
//            </ul>
//         </div>
//    </div>

//   );
// }

export default Navbar;


