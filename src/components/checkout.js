import React from "react";
import "./checkout.css";
import { useSelector } from "react-redux";

const defaultValues = {
  firstname: "",
  lastname: "",
  address: "",
  email: "",
  phone: "",
  postcode: "",
  states: "",
  cities: "",
};
const Checkout = () => {
  const orderdata =
    useSelector((state) => state.Addtocartreducer).addproducts || [];
  console.log("oderedData------->", orderdata);
  return (
    <>
      <div className="checkout-container">
        <div class="row" style={{ padding: "200px 70px", width: "100%" }}>
          <div
            class="col-lg-5"
            style={{ backgroundColor: "#15283ce9", paddingTop: "30px" }}>
            <form>
              <div className="inputs">
                <h1 style={{ color: "white" }}>ADDRESS INFORMATION</h1>
                <div className="checkout-subcontainer">
                  <input placeholder="First Name" />
                  <input placeholder="Last Name" />
                </div>
                <div className="checkout-subcontainer">
                  <input placeholder="Email" />
                  <input placeholder="Phone" />
                </div>
                <div className="checkout-subcontainer">
                  <input placeholder="Address" />
                  <input placeholder="postcode" />
                </div>
                <div className="checkout-subcontainer">
                  <select>
                    <option>States</option>
                    <option>Punjab</option>
                    <option>Chandigarh</option>
                    <option>Himachal Pardesh</option>
                  </select>
                  <select>
                    <option>Cities</option>
                    <option>Ropar</option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div className="checkout-btn">
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div
            className="col-lg-4"
            style={{
              backgroundColor: "#15283ce9",
              color: "white",
              paddingTop: "30px",
            }}
          >
            <form>
              <div className="inputs">
                <h1>CREDIT INFORMATION</h1>
                <div>
                  <input placeholder="Card Number" />
                </div>
                <div>
                  <input type="date" placeholder="Expiration(MM/YY)" />
                </div>
                <div>
                  <input placeholder="Card Security Code" />
                </div>
              </div>
            </form>
          </div>
          <div
            class="col-lg-3"
            style={{
              color: "white",
              backgroundColor: "#f2f2f2",
              color: "black",
              borderRadius: "8px",
              fontSize: "22px",
            }}
          >
            <div className="order-secondpart">
              <h1>Order Summary</h1>
              {orderdata.map((data) => {
                return (
                  <>
                    <div>
                      <span>{data.productname}</span> <br></br>
                        Quantity:-<span>{data.quantity}</span>
                        <br></br>
                        Subtotal:-<span>{data.price}</span>
                    </div>
                  </>
                );
              })}
              <div className="total">
               Tax:-<span>0</span><br></br>
               Total:-<span>Total</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
