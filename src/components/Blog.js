import React, { useEffect, useState } from "react";
import "./blog.css";
import img1 from "./images/game1.jpeg";
import { app } from "../firebase";
import {
  collection,
  getFirestore,
  getDocs,

} from "firebase/firestore";
const firestore = getFirestore(app);

function Blog() {
  const [recievedata,setrecievedata] = useState([]);
  const getdocument = async () =>{
    try{
        const collectionRef = collection(firestore,"Tic-tacs-games");
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
  }
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const data = await getdocument();
              setrecievedata(data);
            } catch (error) {
              console.error("Error fetching documents:", error);
            }
          };
          fetchData();  
    },[])

  return (
    <>
      <div className="background-container">
      <div className="blog-head">
          <h1>Blog</h1>
      </div>
      </div>
      <div className="blog-subcontainer">
      <div className="blog-input-field">
        {     
    recievedata?.map((detail)=>(
        <div className="cards">
        <img src={detail.img} alt="image"/>
        <h2>{detail.title}</h2>
        <p  dangerouslySetInnerHTML={{__html: detail.desc}}></p>
      </div>
    ))
 }  
    </div>
    </div>
    </>
  );
}

export default Blog;
