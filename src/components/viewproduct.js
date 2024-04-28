import React, { useState, useEffect } from "react";
import { app } from "../firebase";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import  "./viewproduct.css"
import { useSelector,useDispatch } from "react-redux";
import { addcart } from "../redux/action";
const firestore = getFirestore(app);

const Viewproduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("id", id);
  const [reciveData, setReciveData] = useState([]);
 
   const cartproduct = useSelector((state)=>state.Addtocartreducer).addproducts;
  //  console.log("jhjsdahjabja,bc",cartproduct);
  const getdocument = async () => {
    try {
      const collectionRef = collection(firestore, "products");
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

  const filteredproduct = reciveData?.find((product) => {
    return product.id === id;
  });
 

  const addtocartdata = (filteredproduct)=>{
    
    if(Array.isArray(cartproduct)) {
     if(cartproduct.some(item => item.id === filteredproduct.id)) {
        alert("Item already exists in cart");
      } else {
        dispatch(addcart({...filteredproduct,quantity:1}));
      }
    } else {
      console.error("Cart product is not an array:", cartproduct);
    }         
  }

  return (
    <>
    
    <div class="row" className="viewproduct-container">
        {
        filteredproduct &&
        <>
           <div className="product-box">
              <div class="col-lg-6" className="imagecontainer"><img src={filteredproduct.img} alt="image"/></div>
              <div class="col-lg-6" style={{color:"white",padding:"3px",fontSize:"22px"}}>
                <h1>{filteredproduct.productname}</h1>
                <p dangerouslySetInnerHTML={{ __html: filteredproduct.desc }}></p>
                <p>₹{filteredproduct.price}</p>
                <button className="viewproduct-btn" onClick={()=>{addtocartdata(filteredproduct)}}>Add To Cart</button>
           </div>
         </div>
        </>
        }
    </div>
    </>
  );
};

export default Viewproduct;
