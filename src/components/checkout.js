import React, { useEffect, useState } from "react";
import "./checkout.css";
import { useSelector } from "react-redux";
// import { app } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import Errorhandle from "../errorhandle";
import { app } from "../firebase";
import { addDoc ,collection ,getFirestore} from "firebase/firestore";
const firestore = getFirestore(app);
const defaultValues = {
  firstname: "",
  lastname: "",
  address: "",
  email: "",
  phone: "",
  postcode: "",
  states:"",
  cities: "",
  creditno:"",
   expirydate:'09-01-2024',
   creditcode:""
};
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const phoneRegex = /^\+?[0-9\s-]{7,15}$/;

const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .max(20, "name must be atleast of 20 characters")
    .required("Required*"),
  lastname: yup
    .string()
    .max(20, "name must be atleast of 20 characters")
    .required("Required*"),
  email: yup
    .string()
    .matches(emailRegex, "Invalid Format")
    .required("Required"),
  phone: yup
    .string()
    .matches(phoneRegex, "Invalid Format")
    .required("Required*"),
  address: yup.string().required("Requird*"),
  states: yup.string().required("Requird*"),
  cities: yup.string().required("Requird*"),
  postcode: yup.string().required("Required").matches(/^\d{5}$/, "Invalid postcode"),
  creditno: yup
    .string()
    .required("Required")
    .matches(/^\d{16}$/, "Invalid credit card number"),
  expirydate: yup
    .date()
    .required("Required"),
  creditcode: yup
    .string()
    .required("Required")
    .matches(/^\d{3}$/, "Invalid security code"),
});
const states = [
  {
    name: "punjab",
    cities: ["ludhiana", "patiala", "Ropar"],
  },
  {
    name: "haryana",
    cities: ["kaithal", "Sonipat", "Rohtak"],
  },
  {
    name: "Himachal Pardesh",
    cities: ["Mandi", "Solan", "Una"],
  },
];

const Checkout = () => {
  const [stateEnabled, setstateEnabled] = useState(false);
  const [checkoutData ,setcheckoutData] = useState([]);
 
  const writeData = async (checkoutData,values) => {
    try{
     const result = await addDoc(collection(firestore, "orders"), {
      firstname: values.firstname,
      lastname: values.lastname,
      address: values.address,
      email: values.email,
      phone: values.phone,
      postcode: values.postcode,
      states:values.states,
      cities: values.cities,
      creditno:values.creditno,
      expirydate:values.expirydate,
      creditcode:values.creditcode,
      orderdata: checkoutData,
      total:checkoutData.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
     });
  }
    catch(error){
     console.error("Error adding blog: ", error);
    }
   }

  const onSubmit = (values) => {
    
    writeData(checkoutData,values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });


  const navigate = useNavigate();

  const orderdata = useSelector((state) => state.Addtocartreducer).addproducts || [];


  
  useEffect(() => {
  
    setcheckoutData(orderdata);
  }, []);

  const SignOut = () => {
    const auth = getAuth(app);
    signOut(auth).then((res) => {
      console.log(res);
      navigate("/login");
    });
  };

  const totalPrice = orderdata.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const { errors, setFieldValue, setTouched, touched, values, handleSubmit ,resetForm } =
    formik;

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-btn">
          <button
            style={{ zIndex: "999" }}
            onClick={() => {
              SignOut();
            }}
          >
            Logout
          </button>
        </div>
        <div class="row" style={{ padding: "150px", width: "100%" }}>
          <div class="col-lg-9">
        <form onSubmit={handleSubmit}>
          <div class="row">
          <div
            class="col-lg-7"
            style={{ backgroundColor: "#AAABBB", paddingTop: "30px" }}
          >
           
              <div className="inputs">
                <h1 style={{ color: "#111" }}>ADDRESS INFORMATION</h1>
                <div className="checkout-subcontainer">
                  <div className="sub-input">
                  <TextField
                    className="mui-input"
                    type="text"
                    value={values.firstname}
                    onChange={(e) => {
                      setFieldValue("firstname", e.target.value);
                    }}
                    onBlur={() => setTouched({ ...touched, firstname: true })}
                    placeholder="First Name"
                  />
                   <Errorhandle  touched={touched} errors={errors} fieldName="firstname"/>
                   </div>
                    <div className="sub-input">
                  <TextField
                    className="mui-input"
                    type="text"
                    value={values.lastname}
                    onChange={(e) => {
                      setFieldValue("lastname", e.target.value);
                    }}
                    onBlur={() => setTouched({ ...touched, lastname: true })}
                    placeholder="Last Name"
                  />
                   <Errorhandle  touched={touched} errors={errors} fieldName="lastname"/>
                   </div>
                </div>
                <div className="checkout-subcontainer">
                  <div  className="sub-input">
                  <TextField
                    className="mui-input"
                    value={values.email}
                    onChange={(e) => {
                      setFieldValue("email", e.target.value);
                    }}
                    onBlur={() => setTouched({ ...touched, email: true })}
                    placeholder="Email"
                  />
                     <Errorhandle  touched={touched} errors={errors} fieldName="email"/>
                     </div>
                     <div  className="sub-input">
                  <TextField
                    className="mui-input"
                    type="number"
                    value={values.phone}
                    onChange={(e) => {
                      setFieldValue("phone", e.target.value);
                    }}
                    onBlur={() => setTouched({ ...touched, phone: true })}
                    placeholder="Phone"
                  />
                  <Errorhandle  touched={touched} errors={errors} fieldName="phone"/>
                  </div>
                </div>
                <div className="checkout-subcontainer">
                  <div className="sub-input">
                  <TextField className="mui-input" 
                   type="text"
                   value={values.address}
                   onChange={(e) => {
                     setFieldValue("address", e.target.value);
                   }}
                   onBlur={() => setTouched({ ...touched, address: true })}
                  placeholder="Address"/>
                  <Errorhandle  touched={touched} errors={errors} fieldName="address"/>
                  </div>
                  <div className="sub-input"> 
                  <TextField className="mui-input"
                   type="number"
                   value={values.postcode}
                   onChange={(e) => {
                     setFieldValue("postcode", e.target.value);
                   }}
                   onBlur={() => setTouched({ ...touched, postcode: true })}
                  placeholder="postcode" />
                  <Errorhandle  touched={touched} errors={errors} fieldName="postcode"/>
                  </div>
                </div>
                <div
                  className="checkout-subcontainer"
                  style={{ display: "flex", gap: "90px" }}
                >
                  <div className="sub-input">
                  <Select
                    style={{ width: "230px" }}
                    placeholder="States"
                    value={values.states}
                    onChange={(e) => {
                      const selectedState = states.find(
                        (state) => state.name === e.target.value
                      );
                      setFieldValue("states", e.target.value);
                      setFieldValue("cities", "");
                      setstateEnabled(!!selectedState);
                    }}
                    onBlur={() => setTouched({ ...touched, states: true })}
                    sx={{ width: "100%" }}
                  >
                    <MenuItem>States</MenuItem>
                    {states.map((state, index) => (
                      <MenuItem key={index} value={state.name}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <Errorhandle  touched={touched} errors={errors} fieldName="states"/>
                  </div>
                  <div className="sub-input">
                  <Select
                    style={{ width: "220px" }}
                    placeholder="cities"
                    value={values.cities}
                    onChange={(e) => {
                      setFieldValue("cities", e.target.value);
                    }}
                    onBlur={() => setTouched({ ...touched, cities: true })}
                    disabled={!stateEnabled}
                    sx={{ width: "100%" }}
                  >
                    <MenuItem>Cities</MenuItem>
                    {values.states &&
                      states
                        .find((state) => state.name === values.states)
                        .cities.map((city, index) => (
                          <MenuItem key={index} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                  </Select>
                  <Errorhandle  touched={touched} errors={errors} fieldName="cities"/>
                  </div>
                </div>
              </div>


          </div>
          <div
            className="col-lg-5"
            style={{
              backgroundColor: "#AAABBB",
              color: "white",
              paddingTop: "30px",
            }}
          >
              <div className="inputs">
                <h1 style={{ color: "#111" }}>CREDIT INFORMATION</h1>
            <div style={{paddingTop:"50px"}}>
                <div>
                  <TextField className="mui-input" 
                   type="number" 
                   value={values.creditno}
                   onChange={(e)=>setFieldValue("creditno",e.target.value)}
                   onBlur={()=>setTouched({...touched,creditno:true})}
                  placeholder="Card Number" 
                  style={{width:"90%"}}
                  />
                   <Errorhandle  touched={touched} errors={errors} fieldName="creditno"/>
                </div>
            <div style={{display:"flex" , alignItems:"center",gap:"10px"}} >
                <div >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      name="expirydate"
                      value={dayjs(values.expirydate)}
                      disablePast                  
                      onChange={(date) => setFieldValue("expirydate", date)}
                      onBlur={() => setTouched({ ...touched, expirydate: true })}      
                      sx={{ width: "240px", padding: "10px" }}
                    />
                  </LocalizationProvider>
                  <Errorhandle  touched={touched} errors={errors} fieldName="expirydate"/>
                </div>
              
                <div>
                  <TextField
                    className="mui-input"
                    type="number"
                    value={values.creditcode}
                    onChange={(e)=>setFieldValue("creditcode",e.target.value)}
                    placeholder="Card Security Code"
                    onBlur={()=>setTouched({...touched,creditcode:true})}
                  />
                  <Errorhandle  touched={touched} errors={errors} fieldName="creditcode"/>
                </div>
               
             </div>   
              </div>
        </div>

        <div className="checkout-btn" >
                <button type="submit">Submit</button>
              </div>
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
                      Quantity:<span>{data.quantity}</span>
                      <br></br>
                      Subtotal:<span>₹{data.price}</span>
                    </div>
                  </>
                );
              })}
              <div className="total">
                Total:<span>₹{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
