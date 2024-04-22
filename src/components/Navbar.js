import React,{useState,useEffect} from 'react'
import './style.css';
import {FaBars , FaTimes} from 'react-icons/fa';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';
import { app } from "../firebase";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const firestore = getFirestore(app);


function Navbar(){
  const [click,setClick] = useState(false);
  const [color,setColor] = useState(false);

  const [reciveData, setReciveData] = useState([]);


  const getdocument = async () => {
    try {
      const collectionRef = collection(firestore, "navbar");
      const querySnapshot = await getDocs(collectionRef);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      console.error("Error fetching documents:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getdocument();
        setReciveData(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchData();
  }, []);

 
   const changeColor = () =>{
         if(window.scrollY >= 100){
          setColor(true);
         }
         else{
         setColor(false)
         }
   }

   window.addEventListener('scroll',changeColor)
  const handleClick = ()=> setClick(!click);

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
             <li className='nav-item'><Link className='customlink' to="/homepage" style={{textTransform:"capitalize"}}>{reciveData[0]?.nav1}</Link></li>
             <li className='nav-item'><Link className='customlink' to="/AboutUs" style={{textTransform:"capitalize"}}>{reciveData[0]?.nav2}</Link></li>
             <li className='nav-item'><Link className='customlink' to="/contactus" style={{textTransform:"capitalize"}}>{reciveData[0]?.nav3}</Link></li>
             <li className='nav-item'><Link className='customlink' to="/Blog" style={{textTransform:"capitalize"}}>{reciveData[0]?.nav4}</Link></li>
            </ul>
           </nav>
       </div>
     )
}

export default Navbar;


