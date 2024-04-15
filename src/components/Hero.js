import React, { useEffect, useState } from "react";
import "./style.css";
import video from "./images/tictacs.mp4";
import { app } from "../firebase";
import { getDatabase, ref, push, onValue } from "firebase/database";
import img1 from "./images/home1.jpeg";
import img2 from "./images/home2.jpeg";
import img3 from "./images/home3.jpeg";
import Carousel from "react-bootstrap/Carousel";
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
    <>
      <div className="hero">
        <div className="overlay"></div>
        {/* <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video> */}
        <div className="hero-content">
          <h1 className="anim" style={{ textTransform: "capitalize" }}>
            {data?.main_content?.title}
          </h1>
          <p className="anim" style={{ textTransform: "capitalize" }}>
            {data?.main_content?.description}
          </p>
          <button
            href="/"
            className="hero-btn  anim"
            style={{ textTransform: "capitalize" }}
          >
            {data?.main_content?.button_title}
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
              Let the Adventure Begin: Your Ultimate Kids' Wonderland!
            </h2>
            Experience a wonderland of joy and excitement at Oh My Game! Our
            mission is to craft the ultimate haven for kids, parents, and
            everyone in between. Dive into a world of endless fun where every
            moment is a new adventure waiting to unfold. Oh My Game! boasts an
            array of thrilling activities and cutting-edge gaming options to
            awaken your inner child and ignite your sense of adventure. From a
            fully stocked Gaming Arcade brimming with machine-operated delights
            to an adrenaline-pumping Laser Tag Playground capable of hosting up
            to 12 players at once, there's never a dull moment. And when you've
            worked up an appetite from all the excitement, our in-house cafe
            awaits, serving up delectable delights to satisfy every craving.
            It's more than just a play zone; it's an all-encompassing hub of
            entertainment and joy where the fun knows no bounds. Come and
            discover the magic of Oh My Game!
          </div>
        </div>
      </div>
      <div className="hero-content3">
        <div className="hero-content3-part1">
          <h1 style={{ color: "white", padding: "20px", textAlign: "center" }}>
            EXPERIENCE THE THRILLS
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
      <div className="hero-content4">
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" />
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Hero;
