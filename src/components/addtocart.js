import React,{useEffect} from "react";
import "./addtocart.css";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { addcart } from "../redux/action";
import { removecart } from "../redux/action";
import { increment } from "../redux/action";

const Addtocart = () =>{
     const dispatch = useDispatch();
    const alldata = useSelector((state)=>state?.Addtocartreducer).addproducts || [];
   //  console.log("--=-=-=-==-=--==-=-->",alldata);

    const incrementdata = (data) => {
      const addnumber = alldata.find((info) => info.id === data.id);
      if (addnumber) {
        addnumber.quantity += 1;
      //   console.log("addnumber",addnumber);
        if(!addnumber){
         dispatch(addcart(addnumber));
        }
       
      //   dispatch(addcart([...alldata]));
      }
   }
    
   const decrementdata = (data) => {
      const decrementno = alldata.find((info) => info.id === data.id);
      if (decrementno && decrementno.quantity > 0) {
        decrementno.quantity -= 1;
      //   console.log("decrementno",decrementno);
       
      //   dispatch(addcart([...alldata]));
      }
      if(!decrementno){
         dispatch(addcart(decrementno));
      }
    };

   const getremovdata = (data) => {
      dispatch(removecart(data.id));
   };

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
                  <button className="add-btn" onClick={() => incrementdata(data)}>+</button>
                  <button className="add-btn">{data.quantity}</button>
                  <button className="add-btn" onClick={()=> decrementdata(data)} >-</button>
            </div>
            <div className="add-subcontainer">
                  <span style={{fontSize:"30px"}}>₹{data.price}</span>
                  <button className="itemdelete-btn" onClick={()=>getremovdata(data)}>Remove</button>
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