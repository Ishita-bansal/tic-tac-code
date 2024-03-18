import React, { useRef, useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { app } from "../firebase";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";
// import Carousel from 'react-bootstrap/Carousel';
import back1 from "./images/game1.jpg";
import back2 from "./images/game2.jpeg";
import back3 from "./images/game3.jpeg";
import img4 from "./images/bday1.jpeg";
import img5 from "./images/bday2.jpeg"
import img6 from "./images/bday3.jpeg";
import img7 from "./images/dish5.JPG";
import img8 from "./images/dish.jpg";
import img9 from "./images/noodles.JPG";
import img10 from "./images/pic6.jpeg";
import img11 from "./images/pic4.jpeg"
import img12 from "./images/pic1.jpeg";
import img13 from "./images/pic2.jpeg";
import img14 from "./images/pic3.jpeg";
import img15 from "./images/dish4.jpeg";
import img16 from "./images/dish6.jpeg";
import img17 from "./images/dish1.jpeg";
import img18 from "./images/dish2.jpeg";
import img19 from "./images/pic5.jpeg";
import img20 from "./images/pic7.jpeg";
import img21 from "./images/pic8.jpeg";

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
function AboutUs() {
  const [data, setData] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const CustomerRef = ref(db, "aboutus");
    onValue(CustomerRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  return (
<> 
    <div style={{backgroundColor:"grey", width:"100%" , height:"120px"}}></div>
<div class="row mt-5" style={{backgroundColor:"#3f51b5"}}> 
        <div class="col-lg-12 text-center">
            <h1 className='aboutanim' style={{color:"white",fontFamily:"cursive",textTransform:"capitalize"}}>{data?.aboutcontent?.heading}</h1>
        </div>
       <div class="col-lg-12" style={{  width:"550px" ,margin:"auto",padding:"30px",color:"white"}}>
            <p>{data?.aboutcontent?.desc}</p>
       </div>
<div class="row">
      <div class="col-lg-12 col-md-12">
         <h1 className='aboutanim' style={{ textAlign: "center", color: "white",textTransform:"capitalize"}}>{data?.aboutcontent?.heading2}</h1>
          <div class="col-lg-6 col-md-6 d-flex justify-content-center align-items-center" style={{width:"100%"}}>  
             <div class="row p-4 ">
                <div class="col-lg-4 col-md-4 minor"><img src={back1} max-width="200px" max-height="200px" alt="" /></div>
                <div class="col-lg-4 col-md-4 minor"><img src={back2} max-width="200px" max-height="200px" alt="" /></div>
                <div class="col-lg-4 col-md-4 minor"> <img src={back3} max-width="200px" max-height="200px" alt="" /></div>
              </div>
           </div> 
       </div>
</div>  
<div class="row">  
      <div class="col-lg-12">
            <h1 className='aboutanim' style={{ textAlign: "center" , color: "white",textTransform:"capitalize" }}>{data?.aboutcontent?.heading3}</h1>
          <div class="col-lg-6 d-flex justify-content-center align-items-center" style={{width:"100%"}}>
              <div class="row p-4 ">
                  <div class="col-lg-4 col-md-4  minor" ><img src={img4} max-width="200px" max-height="200px" alt="" /></div>
                   <div  class="col-lg-4 col-md-4  minor"><img src={img5} max-width="200px" max-height="200px" alt="" /></div>
                   <div class="col-lg-4  col-md-4 minor"><img src={img6} max-width="200px" max-height="200px" alt="" /></div>
              </div> 
          </div>     
      </div>
</div>
    <div class="row">
       <div class="col-lg-12 ">
          <h1 className='aboutanim' style={{ textAlign: "center", color: "white",textTransform:"capitalize" }}>{data?.aboutcontent?.heading4}</h1>
        <div class="col-lg-6 d-flex justify-content-center align-items-center" style={{width:"100%"}}>
          <div class="row p-4">
              <div class="col-lg-4 col-md-4  minor"><img src={img7} max-width="200px"  max-height="200px" alt="" /></div>
              <div class="col-lg-4 col-md-4  minor"><img src={img8} max-width="200px"  max-height="200px" alt="" /></div>
              <div class="col-lg-4 col-md-4  minor"><img src={img9} max-width="200px"  max-height="200px" alt="" /></div>
            </div>      
          </div>
       </div>
    </div>
</div> 

<div class="row">
    <div class="col-lg-12 d-flex flex-column p-5 ">
      <h1 style={{textAlign:"center",paddingBottom:"10px",textTransform:"capitalize"}}>{data?.aboutcontent?.heading5}</h1>
      <FontAwesomeIcon icon={faInstagram}/>
      <h2 style={{textAlign:"center" ,paddingTop:"10px"}}>{data?.aboutcontent?.heading6}</h2>
  </div>
</div> 
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img10} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img13} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img14} alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img15} alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img16} alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img17} alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img18} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img19} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img20} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img21} alt="img" />
        </SwiperSlide>
      </Swiper>
</>
  );
}
export default AboutUs;


