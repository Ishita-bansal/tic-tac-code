import React from "react";
import "./addtocart.css";
import { useSelector } from "react-redux";

const Addtocart = () =>{

    const alldata = useSelector((state)=>state?.Addtocartreducer).addproducts || [];
    console.log("--=-=-=-==-=--==-=-->",alldata);
    
    let quantity;
      
    const increment = () =>{
       quantity =  alldata.quatity + 1;
    }

    const decrement = () =>{
      quantity=  alldata.quatity -1;
    }
  return(
        <>
<div className="addcart-container">
    {
      alldata?.map((data)=>{
         return (
            <>
         <div className="add-data">  
            <div className="add-subcontainer" key={data.id}>
                   <img width="40%" src={data.img} alt="image"/>
                   <h3>{data.productname}</h3>
            </div> 
            <div className="add-subcontainer">
                  <button className="add-btn" onClick={increment}>+</button>
                  <button className="add-btn">{quantity}</button>
                  <button className="add-btn" onClick={decrement}>-</button>
            </div>
            <div className="add-subcontainer">
                  <span style={{fontSize:"30px"}}>₹{data.price}</span>
                  <button className="itemdelete-btn">Remove</button>
              </div>
         </div> 
              </>
         )
      })
        }
         </div>
        </>
     )
}

export default Addtocart;