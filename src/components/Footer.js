import React,{ useEffect,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.png";
import * as yup from "yup";
import { useFormik } from "formik";
import { app } from "../firebase";
import { getDatabase, ref, push, onValue } from "firebase/database";

function Footer() {
  const [data, setData] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const CustomerRef = ref(db, "footer");
    onValue(CustomerRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: (values) => {
      console.log(formik.values);
      console.log(formik.errors);
      console.log(formik.touched);
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .matches(emailRegExp, "Email is not valid")
        .required("this is a required field"),
    }),
  });
  return (
    <div
      class="row pt-5 d-flex justify-content-center "
      style={{
        color: "white",
        backgroundColor: "black",
        width: "100%",
        margin: "0px",
      }}
      id="foot"
    >
      <div class="col-lg-2 col-md-12  col-sm-12">
        <img src={logo} width="200px" height="200px" alt="" />
      </div>
      <div class="col-lg-2 col-md-3 col-sm-12 d-flex justify-content-center">
        <ul class="list-unstyled foots">
          <li style={{textTransform:"uppercase"}}>
            <a href="http://localhost:3000/AboutUs">{data?.line1?.data1}</a>
          </li>
          <li style={{textTransform:"uppercase"}}>
            <a href="http://localhost:3000/contactus">{data?.line1?.data2}</a>
          </li>
          <li style={{textTransform:"uppercase"}}>{data?.line1.data3}</li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 ">
        <ul class="list-unstyled">
          <li>
            <h5  style={{textTransform:"uppercase"}}>{data?.bussiness?.title}</h5>
          </li>
          <li>
            <p>
            {data?.bussiness?.desc}
            </p>
          </li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li  style={{textTransform:"uppercase"}}>{data?.line3?.title}</li>
          <li  style={{textTransform:"uppercase"}}>{data?.line3?.time}</li>
          <li  style={{textTransform:"uppercase"}}>{data?.line3?.day}</li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li class="d-flex justify-content-start p-2" style={{textTransform:"uppercase"}} >
            {data?.line4?.title}
          </li>
          <form
            onSubmit={formik.handleSubmit}
            class="d-flex justify-content-center"
          >
            <input  style={{textTransform:"capitalize"}}
              className="footemail"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              placeholder={data?.line4?.input}
            />
            {formik.touched && formik.errors.email && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}
            <button className="footbtn" type="submit"  style={{textTransform:"capitalize"}}>
             {data?.line4?.btn}
            </button>
          </form>
        </ul>
      </div>
      <div class="separator"></div>
      <div class="copyright">
        <div class="icons">
          <button className="footerbtn">
            <FontAwesomeIcon icon={faGlobe} />
          </button>
          <button className="footerbtn">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <button className="footerbtn">
            <FontAwesomeIcon icon={faLocation} />
          </button>
        </div>
        <p style={{textTransform:"capitalize"}}>{data?.row2?.title}</p>
      </div>
    </div>
  );
}

export default Footer;
