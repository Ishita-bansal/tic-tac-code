import React, { useEffect } from "react";
import "./addtocart.css";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { addcart, decrement } from "../redux/action";
import { removecart } from "../redux/action";
import { increment } from "../redux/action";
import { useNavigate } from "react-router-dom";

const Addtocart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alldata =
    useSelector((state) => state?.Addtocartreducer).addproducts || [];

  const incrementdata = (data) => {
      
    let updatedData = { ...data, quantity: data.quantity + 1 };
    let newProductArray=alldata.filter((obj,i,arr)=>obj?.id!==data?.id)
     dispatch(addcart([...newProductArray,...updatedData]))
     
  };

  const decrementdata = (data) => {
    let updatedData = { ...data, quantity: data.quantity - 1 };
   let newProductArray=alldata.filter((obj,i,arr)=>obj?.id!==data?.id)
     dispatch(addcart([...newProductArray,...updatedData]))
  };

  const getremovdata = (data) => {
    dispatch(removecart(data.id));
  };

  return (
    <>
      <div className="addcart-container">
        <div style={{ width: "100%", textAlign: "left", paddingLeft: "60px" }}>
          <h1>My Shopping Cart</h1>
        </div>
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="addtocart">
            {alldata?.map((data) => {
              return (
                <>
                  <div className="add-data">
                    <div className="add-subcontainer" key={data.id}>
                      <img width="40%" src={data.img} alt="image" />
                      <h3>{data.productname}</h3>
                    </div>
                    <div className="add-subcontainer">
                      <button
                        className="add-btn"
                        onClick={() => incrementdata(data)}
                      >
                        +
                      </button>
                      <button className="add-btn">{data?.quantity}</button>
                      <button
                        className="add-btn"
                        onClick={() => decrementdata(data)}
                        // disabled={data.quantity <= 1}
                      >
                        -
                      </button>
                    </div>
                    <div className="add-subcontainer">
                      <span style={{ fontSize: "30px" }}>
                        ₹{data.price * data.quantity}
                      </span>
                      <button
                        className="itemdelete-btn"
                        onClick={() => getremovdata(data)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="checkout-btn">
            <button
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addtocart;
