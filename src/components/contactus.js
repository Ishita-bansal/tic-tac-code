// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFontAwesome } from "react-icons/fa";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";

// import connect from "./images/contact.jpg";
import connect from "./images/soon.png"
import { Formik, useFormik } from "formik";
import "./contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import videos from "./images/tictacscontact.mp4"
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
        <div className="overlay"></div>
        <video  autoPlay loop muted className='background-video'>
        <source src={videos} type='video/mp4' />
        </video>
        <div className="mainDiv-content">
        <h1 className="anim">CONTACT US</h1>
        </div>
      </div>
      <div class="row d-flex justify-content-evenly p-5">
        <div class="col-md-6 col-sm-12 d-flex flex-column justify-content-center ">
          <h1 style={{ color: "#028692", padding: "60px 50px 0px 50px" }}>
            Let's Connect
          </h1>
          <p style={{ paddingLeft: "50px" }}>
            Please fill the below contact form and we´ll be pleased to attend
            you
          </p>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-4 d-flex justify-content-center">
          <img src={connect} max-width="400px" max-height="400px" alt="image" />
        </div>
      </div>

      <div class="row p-5">
        <div class="col-lg-6 col-md-12 col-sm-12 p-4">
          <div className="left">
            <h1>Get In Touch</h1>
            <div className="contain">
              <div className="location">
                <FontAwesomeIcon icon={faGlobe} />
                <a href="https://www.google.com/maps/place/Tic+tacs-+the+infinity+fun/@30.3436829,76.3761676,17z/data=!3m1!4b1!4m6!3m5!1s0x391029002bfb3b1f:0xd6054cc2569fdf68!8m2!3d30.3436829!4d76.3787425!16s%2Fg%2F11lck5t6b0?entry=ttu" target="_blank">
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
                <a href="#" target="_blank">
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


export default Contactus;
