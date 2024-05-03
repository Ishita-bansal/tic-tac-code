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
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const firestore = getFirestore(app);

function Footer() {
  const [reciveData, setReciveData] = useState([]);
  const emailAddress = 'vidhi@gmail.com';


  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  const getdocument = async () => {
    try {
      const collectionRef = collection(firestore, "footer");
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
            <a href="http://localhost:3000/AboutUs">{reciveData[0]?.data1}</a>
          </li>
          <li style={{textTransform:"uppercase"}}>
            <a href="http://localhost:3000/contactus">{reciveData[0]?.data2}</a>
          </li>
          <li style={{textTransform:"uppercase"}}>{reciveData[0]?.data3}</li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 ">
        <ul class="list-unstyled">
          <li>
            <h5  style={{textTransform:"uppercase"}}>{reciveData[0]?.title}</h5>
          </li>
          <li>
            <p>
            {reciveData[0]?.desc}
            </p>
          </li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li  style={{textTransform:"uppercase"}}>{reciveData[0]?.timetitle}</li>
          <li  style={{textTransform:"uppercase"}}>{reciveData[0]?.time}</li>
          <li  style={{textTransform:"uppercase"}}>{reciveData[0]?.day}</li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12">
        <ul class="list-unstyled">
          <li class="d-flex justify-content-start p-2" style={{textTransform:"uppercase"}} >
            {reciveData[0]?.title2}
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
              placeholder={reciveData[0]?.input}
            />
            {formik.touched && formik.errors.email && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}
            <button className="footbtn" type="submit"  style={{textTransform:"capitalize"}}>
             {reciveData[0]?.btn}
            </button>
          </form>
        </ul>
      </div>
      <div class="separator"></div>
      <div class="copyright">
        <div class="icons">
          <button className="footerbtn" >
            <FontAwesomeIcon icon={faGlobe} />
          </button>
          <button className="footerbtn" onClick={handleEmailButtonClick}>
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <button className="footerbtn">
            <FontAwesomeIcon icon={faLocation} />
          </button>
        </div>
        <p style={{textTransform:"capitalize"}}>{reciveData[0]?.title3}</p>
      </div>
    </div>
  );
}

export default Footer;
