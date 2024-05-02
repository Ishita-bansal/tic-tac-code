import React, { useEffect, useState } from "react";
import "./style.css";
import video from "./images/tictacs.mp4";
import img1 from "./images/home1.jpeg";
import img2 from "./images/home2.jpeg";
import img3 from "./images/home3.jpeg";
import mainimg from "./images/herobackground.jpeg"
import { app } from "../firebase";
import {
  collection,
  getFirestore,
 
  getDocs,

} from "firebase/firestore";
const firestore = getFirestore(app);

function Hero() {
  const [reciveData, setReciveData] = useState([]);


  const getdocument = async () => {
    try {
      const collectionRef = collection(firestore, "Hero");
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

console.log("-=-=--=-==--==",reciveData[0]?.title1);
  return (
    <>
      <div className="hero">
        <div className="overlay"></div>
        {/* <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video> */}
      < img src={mainimg} alt="img" width="100%" height="70%"/>
        <div className="hero-content">
          <h1 className="anim" style={{ textTransform: "capitalize" }}>
            {reciveData[0]?.title1}
          </h1>
          <p className="anim" style={{ textTransform: "capitalize" }}>
            {reciveData[0]?.description}
          </p>
          <button
            href="/"
            className="hero-btn  anim"
            style={{ textTransform: "capitalize" }}
          >
            {reciveData[0]?.button_title}
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div class="row" className="sub-hero-content2">
          <div class="col-lg-6" className="hero-content2-left">
            <video autoPlay loop muted className="hero-content2-video">
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div class="col-lg-6" className="hero-content2-right">
            <h2 className="hero-content2-right-title">
              {" "}
              {reciveData[0]?.title2}
            </h2>
           {reciveData[0]?.desc2}
          </div>
        </div>
      </div>
      <div className="hero-content3">
        <div className="hero-content3-part1">
          <h1 style={{ color: "white", padding: "20px", textAlign: "center",margin:"0px" }}>
          {reciveData[0]?.title3}
          </h1>
        </div>
        <div class="row" className="hero-content3-part2">
          <div className="content3-overlay"></div>
          <div class="col-lg-4" className="sub-hero-content">
            <img src={img1} alt="img" />
          </div>
          <div class="col-lg-4" className="sub-hero-content">
            <img src={img2} alt="img" />
          </div>
          <div class="col-lg-4" className="sub-hero-content">
            <img src={img3} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
