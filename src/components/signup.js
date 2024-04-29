import React,{useState} from "react";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import {app} from "../firebase";
const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmpass: "",
  checked: false,
};

const emailregex =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .max(20, "Name must be of atleast 20 characters")
    .required("Required*"),
  email: yup
    .string()
    .matches(emailregex, "Email is not valid")
    .required("Required*"),
  password: yup
    .string()
    .min(4, "Password must be 4 character")
    .required("Required*"),
  confirmpass: yup
    .string()
    .oneOf([yup.ref("password")], "password must match")
    .required("Required*"),
   checked:yup.boolean().oneOf([true],"You must agree to the terms and conditions")
});

function Signup() {
  const navigate = useNavigate();
  
    const [showPassword,setshowPassword] = useState(false);
    const [showconfirmpass,setshowconfirmpass] =useState(false);

     const togglepassword = () =>{
        setshowPassword(!showPassword);
     }
     const toggleconfirmpassword =()=>{
        setshowconfirmpass(!showconfirmpass)
     }

   
     
  const onSubmit = (values) => {
     console.log(values);
     const auth = getAuth(app);
     createUserWithEmailAndPassword(auth,values.email,values.password)
     .then(res=>{
       console.log(res.user);
       navigate('/login');
     })
     .catch(error=>{
      console.log("error",error);
     })
  };
  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    enableReinitialize: true,
  });

  const {
    handleSubmit,
    values,
    setFieldValue,
    setTouched,
    touched,
    errors,
  } = formik;

  return (
    <>
      <div className="maincontainer">
        <div className="formbox">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="register-inputs">
              <div className="register-input-fields">
                <FontAwesomeIcon icon={faUser} className="fonticon"/>
                <input
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                  onBlur={() => setTouched({ ...touched, name: true })}
                  placeholder="Your Name"
                />
              </div>
              {/* <Errorhandle  touched={touched} errors={errors} fieldName="name"/> */}
              <div className="register-input-fields">
                <FontAwesomeIcon icon={faEnvelope} className="fonticon" />
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setFieldValue("email", e.target.value)}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  placeholder="Email"
                />
              </div>
              {/* <Errorhandle  touched={touched} errors={errors} fieldName="email"/> */}
              <div className="register-input-fields">
                <FontAwesomeIcon icon={faLock} className="fonticon" />
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  onBlur={() => setTouched({ ...touched, password: true })
                  }
                  placeholder="Password"
                />
                <button className="registereyebtn" type="button" onClick={togglepassword}>{showPassword? <FontAwesomeIcon icon={faEye} className="eyeicon"/>: <FontAwesomeIcon icon={faEyeSlash} className="eyeicon" />}</button>
              </div>
             {/* <Errorhandle  touched={touched} errors={errors} fieldName="password"/> */}
              <div className="register-input-fields">
                <FontAwesomeIcon icon={faLock} className="fonticon" />
                <input
                  name="confirmpass"
                  type={showconfirmpass ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={values.confirmpass}
                  onChange={(e) => setFieldValue("confirmpass", e.target.value)}
                  onBlur={() =>setTouched({ ...touched, confirmpass: true })
                  }
                />
                <button className="registereyebtn" type="button" onClick={toggleconfirmpassword}>{showconfirmpass? <FontAwesomeIcon icon={faEye} className="eyeicon"/>: <FontAwesomeIcon icon={faEyeSlash} className="eyeicon" />}</button>
              </div>
              {/* <Errorhandle  touched={touched} errors={errors} fieldName="confirmpass"/> */}

              <div className="register-label">
                <label>
                  <input
                    name="checked"
                    type="checkbox"
                    value={values.checked}
                    onChange={(e) => setFieldValue("checked", !values.checked)}
                    onBlur={()=>setTouched({...touched,checked:true})}
                  />
                  I agree to terms & conditions
                </label>
                {/* <Errorhandle  touched={touched} errors={errors} fieldName="checked"/> */}
              </div>
            </div>
            <div className="btn">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;