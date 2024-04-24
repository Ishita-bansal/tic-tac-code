import React, { useEffect, useState } from "react";
import "./product.css";
import { app } from "../firebase";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const firestore = getFirestore(app);

function Product() {
  const [productdata,  setproductdata] = useState([]);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [seletedMenu,setSeletedMenu]=useState([]);
 const [categorydata, setcategorydata] = useState();
  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const getcategory = async () => {
    try {
      const collectionRef = collection(firestore, "categories");
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
        const data = await getcategory();
        setcategorydata(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchData();
  }, []);

console.log("categorydata",categorydata)

  console.log('seletedMenu==>',seletedMenu)

  const getdocument = async () => {
    try {
      const collectionRef = collection(firestore, "products");
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
        setproductdata(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchData();
  }, []);

  console.log(" product data=======>",productdata);


  const getProductByCat=(info)=>{
    const selectedArray=productdata?.filter((obj,i,arr)=>obj?.category===info?.id)
    console.log('selectedArray==>',selectedArray)
    setSeletedMenu(selectedArray)
  }
  return (
    <>
      <div className="background-container">
        <div className="blog-head">
          <h1>Products</h1>
        </div>
      </div>
      <div className="secondhalf">
      <div className="product-input-field">
      <div class="sidediv" style={{ zIndex: 2 }}>
        <button class="dropdown-btn" onClick={toggleDropdown}>
          Categories
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        <div
          className={"dropdown-container"}
          style={{ display: dropdownActive ? "block" : "none" }}
        >
          {categorydata?.map((info) => {
            return <div className="anchordata" key={info?.id} onClick={()=>getProductByCat(info)}>{info.title}</div>;
          })}
        </div>
      </div>
      
        {seletedMenu?.map((detail) => (
          <div className="product-cards">
            <img src={detail.img} alt="image" />
            <h2>{detail.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: detail.desc }}></p>
            <p>₹{detail.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Product;
