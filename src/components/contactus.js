// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFontAwesome } from "react-icons/fa";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
// import connect from "./images/contact.jpg";
import connect from "./images/soon.png";
import { useState, useEffect, useRef  } from "react";
import "./contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import videos from "./images/tictacscontact.mp4";
import contactimg from "./images/contactbackground.jpeg";
  import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
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
import emailjs from 'emailjs-com';
const firestore = getFirestore(app);


const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const initailValue = {
  fullname: "",
  email: "",
  phonenumber: "",
  message: "",
  address:""
};
const schema = yup.object({
  fullname: yup
    .string()
    .max(20, "Name must be of less than 10 characters")
    .required("Required*"),
  phonenumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required*"),
  email: yup
    .string()
    .matches(emailRegExp, "Email is not valid")
    .required("Required*"),
  address:yup.string().max(20,"Address must be of 20 characters").required("Required*"),
  message: yup
    .string()
    .max(70, "message must be less than of 40 characters")
    .required("Required*"),
});

function Contactus() {
  // const emailRef = useRef();
  // const nameRef = useRef();
  // const addressRef = useRef();
  // const phoneRef = useRef();
  const [reciveData, setReciveData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const form = useRef();
  const emailAddress = 'Tictacs@gmail.Com';

  const phoneNumber = 9678765456;

  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handlePhoneButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
 
  const getdocument = async () => {
    try {
      const collectionRef = collection(firestore, "contactus");
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

  const writeData = async() =>{
    try{
      const result = await addDoc(collection(firestore, "customers"), {
        fullname: values.fullname,
        email: values.email,
        phonenumber: values.phonenumber,
        address:values.address,
       message: values.message,
      });
      resetForm();
      }
     catch(error){
      console.error("Error adding blog: ", error);
     }
    }
  

  // console.log("r==-=--=-=--==--==--=-=-=-=-=--=uwefuefhs",reciveData);

  useEffect(() => emailjs.init("HxGIbyvJvWBNn-A7M"), []);

  const onSubmit = async (values, {resetForm}) => {
    console.log(values);
    await writeData();
    console.log("Start email ")

    emailjs.sendForm('service_72qztwj', 'template_901kkji', form.current, 'HxGIbyvJvWBNn-A7M')
    .then((result) => {
        console.log(result.text);
        console.log("message sent!")
    }, (error) => {
        console.log(error.text);
        console.log("error sending message, try again!")
    });

    // const serviceId = "service_72qztwj";
    // const templateId = "template_901kkji";
    // try {
    //   setLoading(true);
    //   await emailjs.send(serviceId, templateId, {
    //    name: nameRef.current.value,
    //     recipient: emailRef.current.value,
    //     address: addressRef.current.value,
    //     phoneNumber : phoneRef.current.value
     
    //   });
    //   alert("email successfully sent check inbox");
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }


    // const templateParams = {
    //   from_name: "bansalisha0192@gmail.com",
    //   message: values.message,
    //   email: values.email,
    //   publicKey: "HxGIbyvJvWBNn-A7M",
    //   // userId:"664654655665" // Add your public key here
    // };
  
    // await emailjs
    //   .sendForm("service_72qztwj", "template_901kkji", templateParams)
    //   .then(
    //     (result) => {
    //       console.log("Email Send SUCCESS!", result.text);
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //     }
    //   );



    // await emailjs.send("service_72qztwj","template_901kkji","sqOgJqBSPvpKlWmoP" ,{
    //   from_name: "bansalisha0192@gmail.com",
    //   message: values.message,
    //   email: values.email,
    //   }).then(
    //        (result) => {
    //         console.log('Email Senf SUCCESS!',result.text);
    //       },
    //      (error) => {
    //         console.log('FAILED...', error);
    //        },
    //     );
    //     console.log("End  email ")
         
    // emailjs.sendForm('service_72qztwj', 'template_901kkji', form.current, {
    //     publicKey: 'sqOgJqBSPvpKlWmoP',
    //   })
    //   .then(
    //     (result) => {
    //       console.log('SUCCESS!',result.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
  };

  const formik = useFormik({
    initialValues: initailValue,
    onSubmit: onSubmit,
    validationSchema: schema,
    enableReinitialize:true
  });

  const { values, handleSubmit,handleBlur,errors,touched,setFieldValue,resetForm} = formik;
 
  return (
    <>
      <div className="mainDiv">
        <div className="overlay"></div>
        {/* <video autoPlay loop muted className="background-video">
          <source src={videos} type="video/mp4" />
        </video> */}
        {/* <img src={contactimg} alt="img" width="100%" style={{height:'60vh'}}/> */}
        <div className="mainDiv-content">
          <h1 className="anim" style={{ textTransform: "uppercase" }}>
            {reciveData[0]?.heading}
          </h1>
        </div>
      </div>
      <div class="row d-flex justify-content-evenly p-5">
        <div class="col-md-6 col-sm-12 d-flex flex-column justify-content-center ">
          <h1
            style={{
              color: "#028692",
              padding: "60px 50px 0px 50px",
              textTransform: "capitalize",
            }}
          >
            {reciveData[0]?.heading2}{" "}
          </h1>
          <p style={{ paddingLeft: "50px" }}>{reciveData[0]?.desc}</p>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-4 d-flex justify-content-center">
          <img src={connect} max-width="400px" max-height="400px" alt="image" />
        </div>
      </div>

      <div class="row p-5">
        <div class="col-lg-6 col-md-12 col-sm-12 p-4">
          <div className="left">
            <h1 style={{ textTransform: "capitalize" }}>
              {reciveData[0]?.heading3}
            </h1>
            <div className="contain">
              <div className="location">
                <FontAwesomeIcon icon={faGlobe} />
                <a
                  href="https://www.google.com/maps/place/Tic+tacs-+the+infinity+fun/@30.3436829,76.3761676,17z/data=!3m1!4b1!4m6!3m5!1s0x391029002bfb3b1f:0xd6054cc2569fdf68!8m2!3d30.3436829!4d76.3787425!16s%2Fg%2F11lck5t6b0?entry=ttu"
                  target="_blank"
                  style={{ textTransform: "capitalize" }}
                >
                  {" "}
                  {reciveData[0]?.address}
                </a>
              </div>
              <div className="location">
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                    onClick={handleEmailButtonClick}
                  
                  style={{ textTransform: "capitalize" }}
                >
               
                  {reciveData[0]?.emailhead}
                  <br></br>
                  {reciveData[0]?.email}
                </a>
              </div>
              <div className="location" >
                <FontAwesomeIcon icon={faPhone} />
                <a
                  onClick={handlePhoneButtonClick}
                 
                  style={{ textTransform: "capitalize" }}
                >
                  {reciveData[0]?.phonehead}
                  <br></br>
                  {reciveData[0]?.phoneno}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 major">
          <div className="formcontainer">
            <h1 style={{ textTransform: "capitalize" }}>
              {reciveData[0]?.formhead}
            </h1>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="formitems">
                <input
                  type="text"
                  name="fullname"
               
                  value={values.fullname}
                  onChange={(e) => {
                    setFieldValue("fullname", e?.target?.value);
                  }}
                  onBlur={handleBlur}
                  placeholder={reciveData[0]?.custname}
                  style={{ textTransform: "capitalize" }}
                />
              </div>
              {touched.fullname && errors.fullname ? (
                <p className="showerror">{errors.fullname}</p>
              ) : (
                <p className="showerror" style={{ visibility: "hidden" }}>
                  text
                </p>
              )}
              <div className="formitems">
                <input
                  type="number"
                  name="phonenumber"
               
                  value={values.phonenumber}
                  onBlur={handleBlur}
                  onChange={ (e)=>{setFieldValue("phonenumber",e.target.value)}}
                  placeholder={reciveData[0]?.custphone}
                  style={{ textTransform: "capitalize" }}
                />
              </div>
              {touched.phonenumber && errors.phonenumber ? (
                <p className="showerror">{errors.phonenumber}</p>
              ) : (
                <p className="showerror" style={{ visibility: "hidden" }}>
                  text{" "}
                </p>
              )}
              <div className="formitems">
                <input
                  type="email"
                  name="email"
                 
                  values={values.email}
                  onBlur={handleBlur}
                  onChange={(e)=>{setFieldValue("email",e.target.value)}}
                  placeholder={reciveData[0]?.custemail}
                  
                />
              </div>
              {touched.email &&  errors.email ? (
                <p className="showerror">{errors.email}</p>
              ) : (
                <p className="showerror" style={{ visibility: "hidden" }}>
                  text
                </p>
              )}

             <div className="formitems">
                <input
                  type="text"
                  name="address"
               
                  values={values.address}
                  onBlur={handleBlur}
                  onChange={(e)=>{setFieldValue("address",e.target.value)}}
                  placeholder={reciveData[0]?.custaddress}
                  
                />
              </div>
              {touched.address &&  errors.address ? (
                <p className="showerror">{errors.address}</p>
              ) : (
                <p className="showerror" style={{ visibility: "hidden" }}>
                  text
                </p>
              )}



              <div className="formitems">
                <textarea
                  width="184px"
                  name="message"
                  value={values.message}
                  onBlur={handleBlur}
                  height="40px"
                  onChange={(e)=>setFieldValue("message",e.target.value)}
                  style={{ resize: "horizontal", textTransform: "capitalize" }}
                  placeholder={reciveData[0]?.custmessage}
                ></textarea>
              </div>
              {touched.message && errors.message ? (
                <p className="showerror">{errors.message}</p>
              ) : (
                <p className="showerror" style={{ visibility: "hidden" }}>
                  text
                </p>
              )}
              <div className="formbtn">
                <button className="contactbtn" type="submit" style={{ textTransform: "capitalize" }} >
                  {reciveData[0]?.btntitle}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="last-map" style={{ width:'100%'}}>
    <iframe
      title="Oh My Game! Location"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27445.75254619908!2d76.7026142!3d30.69817945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713167424862!5m2!1sen!2sin"
      width="50%"
      
      height="600px"
      style={{ border: 0,width:"100%" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    </div>
    <div>
          {/* <>Address</p> */}

    </div>
    </>
  );
}


export default Contactus;
