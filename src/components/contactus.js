// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFontAwesome } from "react-icons/fa";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
// import connect from "./images/contact.jpg";
import connect from "./images/soon.png";
import { useState, useEffect } from "react";
import "./contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import videos from "./images/tictacscontact.mp4";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { app } from "../firebase";

const initailValue = {
  fullname: "",
  email: "",
  phonenumber: "",
  message: "",
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
  message: yup
    .string()
    .max(40, "message must be less than of 40 characters")
    .required("Required*"),
});
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function Contactus() {
  const [submitting, setSubmitting] = useState(false);
  const [data, setdata] = useState();
  useEffect(() => {
    const db = getDatabase(app);
    const CustomerRef = ref(db, "contactus");
    onValue(CustomerRef, (snapshot) => {
      const data = snapshot.val();
      setdata(data);
    });
  }, []);

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    setSubmitting(true);
    resetForm();
    const db = getDatabase(app);
    try {
      await push(ref(db, "customers"), {
        fullname: values.fullname,
        email: values.email,
        phonenumber: values.phonenumber,
        message: values.message,
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error storing data:", error);
      alert("Error submitting form. Please try again.");
    }
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: initailValue,
    onSubmit: onSubmit,
    validationSchema: schema,
    enableReinitialize:true
  });

  const { values, handleSubmit, setFieldValues } = formik;
 
  return (
    <>
      <div className="mainDiv">
        <div className="overlay"></div>
        <video autoPlay loop muted className="background-video">
          <source src={videos} type="video/mp4" />
        </video>
        <div className="mainDiv-content">
          <h1 className="anim" style={{ textTransform: "uppercase" }}>
            {data?.contactcontent?.heading}
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
          
            {data?.contactcontent?.heading2}{" "}
          </h1>
          <p style={{ paddingLeft: "50px" }}>{data?.contactcontent?.desc}</p>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-4 d-flex justify-content-center">
          <img src={connect} max-width="400px" max-height="400px" alt="image" />
        </div>
      </div>

      <div class="row p-5">
        <div class="col-lg-6 col-md-12 col-sm-12 p-4">
          <div className="left">
            <h1 style={{ textTransform: "capitalize" }}>
              {data?.contactcontent?.heading3}
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
                  {data?.contactcontent?.address}
                </a>
              </div>
              <div className="location">
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                  href="#"
                  target="_blank"
                  style={{ textTransform: "capitalize" }}
                >
                  {" "}
                  {data?.contactcontent?.emailhead}
                  <br></br>
                  {data?.contactcontent?.email}
                </a>
              </div>
              <div className="location" s>
                <FontAwesomeIcon icon={faPhone} />
                <a
                  href="#"
                  target="_blank"
                  style={{ textTransform: "capitalize" }}
                >
                  {data?.contactcontent?.phonehead}
                  <br></br>
                  {data?.contactcontent?.phoneno}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 major">
          <div className="formcontainer">
            <h1 style={{ textTransform: "capitalize" }}>
              {data?.contactcontent?.formhead}
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="formitems">
                <input
                  type="text"
                  name="fullname"
                  value={values.fullname}
                  onChange={(e) => {
                    setFieldValue("fullname", e?.target?.value);
                  }}
                  onBlur={formik.handleBlur}
                  placeholder={data?.contactcontent?.custname}
                  style={{ textTransform: "capitalize" }}
                />
              </div>
              {formik.touched && formik.errors.fullname ? (
                <p className="showerror">{formik.errors.fullname}</p>
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
                  onBlur={formik.handleBlur}
                  placeholder={data?.contactcontent?.custphone}
                  style={{ textTransform: "capitalize" }}
                />
              </div>
              {formik.touched && formik.errors.phonenumber ? (
                <p className="showerror">{formik.errors.phonenumber}</p>
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
                  onBlur={formik.handleBlur}
                  placeholder={data?.contactcontent?.custemail}
                  style={{ textTransform: "capitalize" }}
                />
              </div>
              {formik.touched && formik.errors.email ? (
                <p className="showerror">{formik.errors.email}</p>
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
                  onBlur={formik.handleBlur}
                  height="40px"
                  style={{ resize: "horizontal", textTransform: "capitalize" }}
                  placeholder={data?.contactcontent?.custmessage}
                ></textarea>
              </div>
              {formik.touched && formik.errors.message ? (
                <p className="showerror">{formik.errors.message}</p>
              ) : (
                <p className="showerror" style={{ visibility: "hidden" }}>
                  text
                </p>
              )}
              <div className="formbtn">
                <button type="submit" style={{ textTransform: "capitalize" }}>
                  {data?.contactcontent?.btntitle}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
