// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFontAwesome } from "react-icons/fa";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import logos from "./images/arcadegamezone.jpg";
import image from "./images/image.jpg";
// import connect from "./images/contact.jpg";
import connect from "./images/soon.png"
import { Formik, useFormik } from "formik";
import "./contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contactus() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const formik = useFormik({
    initialValues:{
      fullname:"",
      email:"",
      phonenumber:"",
      message:""
    },

    onSubmit : (values)=>{
      console.log(formik.values);
      console.log(formik.errors);
      console.log(formik.touched);
    },

     validationSchema:yup.object({
      fullname:yup.string().max(10,"Name must be of less than 10 characters").required("this is a required field"),
      phonenumber:yup.string().matches(phoneRegExp, 'Phone number is not valid').required("this is a required field"),
      email:yup.string().matches(emailRegExp,"Email is not valid").required("this is a required field"),
      message:yup.string().max(40,"message must be less than of 40 characters")
  })


  })
  return (
    <>
      <div className="mainDiv">
        <h1>CONTACT US</h1>
      </div>
      <div class="row d-flex justify-content-evenly">
        <div class="col-md-6 col-sm-12 d-flex flex-column justify-content-start ">
          <h1 style={{ color: "#028692", padding: "60px 50px 0px 50px" }}>
            Let's Connect
          </h1>
          <p style={{ paddingLeft: "50px" }}>
            Please fill the below contact form and we´ll be pleased to attend
            you
          </p>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-4">
          <img src={connect} max-width="400px" max-height="400px" alt="image" />
        </div>
      </div>

      <div class="row p-4">
        <div class="col-lg-6 col-md-12 col-sm-12 p-4">
          <div className="left">
            <h1>Get In Touch</h1>
            <div className="contain">
              <div className="location">
                <FontAwesomeIcon icon={faGlobe} />
                <a href="#" target="_blank">
                  {" "}
                  Find Us At Patiala
                </a>
              </div>
              <div className="location">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="#" target="_blank">
                  {" "}
                  Email <br></br> tictacs@gmail.com
                </a>
              </div>
              <div className="location" s>
                <FontAwesomeIcon icon={faPhone} />
                <a href="https://www.google.com/maps?sca_esv=fb15e9ca2cde264d&rlz=1C1CHBD_enIN1041IN1041&output=search&q=tic+tacs+patiala+location&source=lnms&entry=mc&ved=1t:200715&ictx=111" target="_blank">
                  Phone<br></br>9781894694
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 major" >
          <div className="formcontainer">
            <h1>Contact Us</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="formitems">
                <input type="text" name="fullname" onBlur={formik.handleBlur}  onChange={formik.handleChange} placeholder="Full Name" />
                
              </div>
                {
                  formik.touched && formik.errors.fullname && <p style={{color:"red"}}>{formik.errors.fullname}</p>
                }
              <div className="formitems">
                <input type="number"  name="phonenumber" onBlur={formik.handleBlur}  onChange={formik.handleChange} placeholder="Phone Number" />
              </div>
                  {
                    formik.touched && formik.errors.phonenumber && <p style={{color:"red"}}>{formik.errors.phonenumber}</p>
                  }
              <div className="formitems">
                <input type="email" name="email" onBlur={formik.handleBlur}  onChange={formik.handleChange} placeholder="Email" />
              </div>
                {
                  formik.touched && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>
                }
              <div className="formitems">
                <textarea width="184px" name="message" onBlur={formik.handleBlur} onChange={formik.handleChange} height="40px" style={{resize:"horizontal"}}></textarea>
              </div>
                {
                  formik.touched && formik.errors.message && <p style={{color:"red"}}>{formik.errors.message}</p>
                }
              <div className="formbtn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


// function Contactus() {
  // const formik = useFormik({
  //   initialValues:{
  //     firstname:"",
  //     lastname:"",
  //     email:"",
  //     phonenumber:"",
  //     subject:"",
  //     message:""
  //   },
//   //   validationSchema:yup.object({
//   //    firstname:yup.string().max(10,"username must be less than 10 characters").required("this is a require field"),
//   //    lastname:yup.string().max(10,"last name must be less than 10 character").required("required field"),
//   //   //  email:yup.toString().
//   //   }),
//   //   onSubmit:(values)=>{
//   //     console.log(formik.errors);
//   //    console.log(values);
//   //   }
//   // });
//   return (
//    <>
//     <div class="row">
//         <div class="col-lg-12">
//            <img src={logos} width="100%" height="100%" alt="" opacity="0.7"/>
//         </div>
//         <div clas="col-lg-12">
//           <h1 style={{position:"absolute" , top :"50%", left:"40%",fontSize:"50px", color:"white",fontWeight:"bolder",fontFamily:"cursive"}}>CONTACT US</h1>
//         </div>
//     </div>
//     <div class="row">
//        <div class="col-lg-12">
//          <h3 style={{ padding: "50px", textAlign: "center",  color: "maroon",fontFamily: "cursive",fontWeight: "lighter",}}>WE’RE CONTINUALLY WORKING TO IMPROVE YOUR EXPERIENCE</h3>
//        </div>
//        <div class="col-lg-12">
//        <h1 style={{ textAlign: "center",fontFamily: "cursive",fontWeight: "bolder",color: "grey"}}>Do Visit</h1>
//        </div>
//     </div>
//     <div class="row " style={{ marginTop: "50px",width:"100%",height:"100vh",
//     position:"relative"}}>
//         <div class="col-lg-12  d-flex justify-content-center">
//             <img src={image}  alt="pic" class="rounded"/>
//         </div>
//         <div class="row">
//             <div class="col-lg-12" style={{position:"absolute", top:"20%",left:"50%",color:"white",fontFamily:"cursive"}}>
//                     <h1>Happy to attend you!</h1>
//             </div>
//         </div>
//         <div class="row d-flex justify-content-evenly" style={{position:"absolute",top:"90%",left:"0%"}}>
//               <div class="col-lg-4" className='sub-card' style={{width:"200px"}}>
//                      <h1>Find Us</h1>
//                      <p>Patiala</p>
//               </div>
//               <div class="col-lg-4" className='sub-card' style={{width:"200px"}}>
//                      <h1>Hours</h1>
//                      <p>9.00 AM to 12.00 PM</p>
//                      <p>Mon to Sun</p>
//               </div>
//               <div class="col-lg-4" className="sub-card" style={{width:"200px"}}>
//                    <h1>Call Us</h1>
//                    <p>9781894694</p>
//               </div>
//         </div>
//     </div>
//     <div class="container d-flex justify-content-center align-items-center">
//     <div class="row" className='background'  style={{marginTop:'150px'}}>
//          <div class="col-lg-12">
//                <h1 style={{textAlign:"center" , color:"white"}}>Lets Connect</h1>
//                <p className="para">Please fill the contact form and we´ll be pleased to attend you</p>
//          </div>

//          <div class="row d-flex flex-column justify-content-center" style={{border:"1px solid"}}>
//             <div class="col p-5">
//                <div class="col-lg-12 p-4" className='value'>
//                 <input type="text" placeholder="Name"  />
//                 </div>
//                 <div class="col-lg-12 p-4" className='value'>
//                 <input type= "number" placeholder="Phone Number"/>
//                 </div>
//                 <div class="col-lg-12 p-4" className='value'>
//                 <input type="email" placeholder="Email"/>
//                 </div>
//                 <div class="col-lg-12 p-4" className='value'>
//                 <select name="subject">
//                        <option>Hours of Operation</option>
//                        <option>Booking for birthday party</option>
//                        <option>Prices</option>
//                        <option>Location and direction</option>
//                        <option>Booking for Games</option>
//                        <option>Media queries</option>
//                        <option>Suggestions and Complaints</option>
//                      </select>
//                 </div>
//                 <div class="col-lg-12 p-4" className='value'>
//                 <textarea rows="4" cols="50"></textarea>
//                 </div>
//                 <div class="col-lg-12 p-4 d-flex justify-content-end">
//                 <button style={{cursor:"pointer"}}>Submit</button>
//                 </div>
//         </div>
//         </div>
//         </div>
//     </div>
// </>
//   )
{
  /* <div className="contact" style={{marginTop:'20px'}}>       <div className="contactform">
          <div className="background">
             <h1 >Lets Connect</h1>
             <p className="para">Please fill the contact form and we´ll be pleased to attend you</p>
               <div className="form-container">
                 <form onSubmit={formik.handleSubmit}>
                      <label>Name:</label>
                     <input type="text" name="firstname" onChange={formik.handleChange}/>
                      {
                     formik.errors.firstname && <p style={{color:"red",textAlign:"right" , padding:"0px"}} >{formik.errors.firstname}</p>
                     }
                     <label>Last Name:</label>
                     <input type="text" name="lastname" onChange={formik.handleChange}/>
                     {
                     formik.errors.lastname && <p style={{color:"red"}} >{formik.errors.lastname}</p>
                     }
                     <label>Email:</label>
                     <input type="email" name="email" onChange={formik.handleChange}/>
                     <label>Phone:</label>
                     <input type="number" name="phonenumber" onChange={formik.handleChange}/>
                     <label>Subject:</label>
                    <select name="subject" onChange={formik.handleChange}>
                      <option>Hours of Operation</option>
                      <option>Booking for birthday party</option>
                      <option>Prices</option>
                      <option>Location and direction</option>
                      <option>Booking for Games</option>
                      <option>Media queries</option>
                      <option>Suggestions and Complaints</option>
                    </select>
                     <label>Message</label>
                     <textarea rows="3" cols="10" name="message" onChange={formik.handleChange}></textarea>
                     <div className="submitbtn">
                     <button style={{cursor:"pointer"}}>Submit</button>
                     </div>
                 </form>
              </div>
          </div>
      </div>
    </div>  
     </div> */
}

export default Contactus;
