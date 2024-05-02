import React, { useEffect, useState } from "react";
import "./product.css";
import { app } from "../firebase";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addcart } from "../redux/action";
const firestore = getFirestore(app);

function Product() {
  const [productdata, setproductdata] = useState([]);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [seletedMenu, setSeletedMenu] = useState([]);
  const [categorydata, setcategorydata] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addData =
    useSelector((state) => state?.Addtocartreducer).addproducts || [];

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };
  const [recieveblogdata, setrecieveblogdata] = useState([]);
  const getblogdata = async () => {
    try {
      const collectionRef = collection(firestore, "Tic-tacs-games");
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
        const data = await getblogdata();
        setrecieveblogdata(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchData();
  }, []);

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

  const getviewdata = (detail) => {
    navigate(`/viewproduct/${detail.id}`);
  };

  const getcartdata = (detail) => {
    dispatch(addcart([{ ...detail, quantity: 1 }]));
  };

  const getProductByCat = (info) => {
    const selectedArray = productdata?.filter(
      (obj, i, arr) => obj?.category === info?.id
    );
    setSeletedMenu(selectedArray);
  };



  const getAmountOfProduct=(data)=>{

    // console.log('data==>',data)
    // console.log('alldata==>',alldata)
      
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
                return (
                  <div
                    className="anchordata"
                    key={info?.id}
                    onClick={() => getProductByCat(info)}
                  >
                    {info.title}
                  </div>
                );
              })}
            </div>
          </div>
          {seletedMenu.length > 0 ? (
            seletedMenu?.map((detail) => (
              <div className="product-cards">
                <img src={detail.img} alt="image" />
                <h2>{detail.productname}</h2>
                <p dangerouslySetInnerHTML={{ __html: detail.desc }}></p>
                <p>₹{detail.price}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                  }}
                >
                  {
                    getAmountOfProduct(detail)
                  }
                  {/* {detail.quantity === 0 ? (
                    <button
                      style={{
                        width: "150px",
                        height: "50px",
                        borderRadius: "30px",
                        backgroundColor: "#111",
                        color: "white",
                      }}
                      onClick={() => {
                        getcartdata(detail);
                      }}
                    >
                      Add To Cart
                    </button>
                  ) : (
                    <div className="add-subcontainer">
                      onClick={()=>{incrementdata(detail)}}
                      <button className="add-btn">+</button>
                      <button className="add-btn">{detail?.quantity}</button>
                      onClick={()=>{decrementdata(detail)}}
                      <button className="add-btn">-</button>
                    </div>
                  )} */}
                  <button
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#111",
                      color: "white",
                    }}
                    onClick={() => {
                      getviewdata(detail);
                    }}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="blog-input-field">
              {recieveblogdata?.map((detail) => (
                <div className="cards">
                  <img src={detail.img} alt="image" />
                  <h2>{detail.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: detail.desc }}></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
