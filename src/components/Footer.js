import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faEnvelope,faLocation} from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.png';
import * as yup from "yup";
import { useFormik } from "formik";
function Footer() {
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;     
  const formik = useFormik({
         initialValues:{
          email:""
         },

         onSubmit : (values)=>{
          console.log(formik.values);
          console.log(formik.errors);
          console.log(formik.touched);
        },
    
         validationSchema:yup.object({
          email:yup.string().matches(emailRegExp,"Email is not valid").required("this is a required field"),  
      })
  });
  return (  
    <div class="row pt-5 d-flex justify-content-center " style={{ color: "white", backgroundColor: "black", width:"100%" , margin:"0px"}} id="foot" >
      <div class="col-lg-2 col-md-12  col-sm-12">
        <img src={logo} width="200px" height="200px"  alt=''/>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-12 d-flex justify-content-center">
        <ul class="list-unstyled foots">
          <li><a href="http://localhost:3000/AboutUs">ABOUT US</a></li>
          <li><a href="http://localhost:3000/contactus">CONTACT US</a></li>
          <li>VISIT US</li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 ">
        <ul class="list-unstyled">
          <li><h5>BUSINESS OPPORTUNITIES</h5></li>
          <li><p>Arcade Zone is expanding very quickly all over the Nation,
             If you are interested in being a part of one of these locations please contact us at<br></br>@tictacs_theinfinityfun</p></li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li>HOURS</li>
          <li>OPEN AT 10:00 AM - 11:00 PM</li>
          <li>MONDAY - SUNDAY</li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li class="d-flex justify-content-start p-2">SIGN UP TO OUR NEWSLETTER</li>
          <form onSubmit={formik.handleSubmit} class="d-flex justify-content-center">
            <input className='footemail' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} type="email"  placeholder="Your Email"/>
            {
              formik.touched && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>
            }
            <button className='footbtn' type="submit">Submit</button>
          </form>    
        </ul>
      </div>
      <div class="separator"></div>
      <div class="copyright">
        <div class="icons">
        <button className='footerbtn'><FontAwesomeIcon icon={faGlobe}/></button> 
        <button className='footerbtn'><FontAwesomeIcon icon={faEnvelope}/></button>
        <button className='footerbtn'><FontAwesomeIcon icon={faLocation} /></button>
        </div>
        <p>All Copyright rights are reserved</p>
      </div>
    </div>
     
  );
}

export default Footer;
