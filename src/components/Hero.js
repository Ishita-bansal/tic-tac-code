import React, { useEffect, useState } from "react";
import "./style.css";
import video from "./images/tictacs.mp4";
import { app } from "../firebase";
import { getDatabase, ref, push, onValue } from "firebase/database";
function Hero() {
  const [data, setData] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const CustomerRef = ref(db, "hero");
    onValue(CustomerRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  console.log("data==>", data);
  return (
    <div className="hero">
      <div className="overlay"></div>
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="anim" style={{textTransform:"capitalize"}}>{data?.main_content?.title}</h1>
        <p className="anim" style={{textTransform:"capitalize"}}>{data?.main_content?.description}</p>
        <button href="/" className="hero-btn  anim" style={{textTransform:"capitalize"}}>
        {data?.main_content?.button_title}
        </button>
      </div>
    </div>
  );
}

export default Hero;
