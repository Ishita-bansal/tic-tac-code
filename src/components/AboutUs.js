import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";
// import Carousel from 'react-bootstrap/Carousel';
import back1 from "./images/game1.JPG";
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


  return (
<> 
    <div style={{backgroundColor:"grey", width:"100%" , height:"120px"}}></div>
<div class="row mt-5" style={{backgroundColor:"#3f51b5"}}> 
        <div class="col-lg-12 text-center">
            <h1 className='anim' style={{color:"white",fontFamily:"cursive"}}>About Us</h1>
        </div>
       <div class="col-lg-12" style={{  width:"550px" ,margin:"auto",padding:"30px",color:"white"}}>
            <p> Arcade Zone is South Florida’s newest Indoor Entertainment
                Venue.Highlights include top of the line Arcade Games, Redemption Games
                with the best selection of prizes and the newest and most modern
                location based Virtual Reality Entertainment, offering the highest level
                of customer service cleanliness and security. Fun Starts Here!!!
            </p>
       </div>
<div class="row">
      <div class="col-lg-12 col-md-12">
         <h1 className='anim' style={{ textAlign: "center", color: "white" }}>Fun Games</h1>
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
            <h1 className='anim' style={{ textAlign: "center" , color: "white" }}>Birthday Parties</h1>
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
          <h1 className='anim' style={{ textAlign: "center", color: "white" }}>Food</h1>
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
      <h1 style={{textAlign:"center",paddingBottom:"10px"}}>Follow Us On Instagram</h1>
      <FontAwesomeIcon icon={faInstagram}/>
      <h2 style={{textAlign:"center" ,paddingTop:"10px"}}>@tictacs_theinfinityfun</h2>
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

 {/* <div class="Container">
    <div class="row">
        <div class="col">
          <Carousel>
              <Carousel.Item interval={500}>
                <img src={img10}  alt="img" className='d-block w-100 ' />
              </Carousel.Item>
              <Carousel.Item  interval={500}>
                <img src={img11}  alt="img" className='d-block w-100 '  />
              </Carousel.Item>
              <Carousel.Item  interval={500}>
                <img src={img12}  alt="img" className='d-block w-100 '  />
              </Carousel.Item>
              <Carousel.Item  interval={500}>
                <img src={img13}  alt="img" className='d-block w-100 '/>
              </Carousel.Item>
          </Carousel>
        </div>
    </div>
 </div> */}
</>
  );
}
export default AboutUs;





// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "./style.css";
// import back1 from "./images/img1.jpeg";
// import back2 from "./images/img2.jpeg";
// import back3 from "./images/img3.jpeg";
// import img4 from "./images/img2.jpg";
// import img5 from "./images/download.jpg"
// import img6 from "./images/cake.jpg";
// import img7 from "./images/food1.jpg";
// import img8 from "./images/food2.jpg";
// import img9 from "./images/food3.jpg";
// import { faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
// function AboutUs() {
//   return (
// <> 
//     <div style={{backgroundColor:"grey", width:"100%" , height:"100px"}}></div>
//   <div style={{paddingTop:"80px" ,width:"100%" , height:"100vh", display:"flex" , justifyContent:"center",alignItems:"center"}}> 
//     <div
//       class="page2"
//       style={{
//         height:"100vh",
//         backgroundColor: " #0061ff",
//         opacity:"0.8",
//         borderRadius: "20%"
//       }}
//     >
//       <div style={{ textAlign: "center", color: "white"}}>
//         <h1>About Us</h1>
//       </div>
//       <p class="para">
//         Arcade Zone is South Florida’s newest Indoor Entertainment
//         Venue.Highlights include top of the line Arcade Games, Redemption Games
//         with the best selection of prizes and the newest and most modern
//         location based Virtual Reality Entertainment, offering the highest level
//         of customer service cleanliness and security. Fun Starts Here!!!
//       </p>
//       <div className="col1" style={{ display: "flex", justifyContent: "space-around" }}>
//         <div className='head'>
//           <h1> Fun Games </h1>
//           <div
//             class="images"
//             style={{
//               padding: "20px",
//               display: "flex",
//               justifyContent: "flex-start",
//               alignItem: "center",
//               gap: "10px",
//             }}
//           >
//             <img src={back1} width="200px" height="200px" alt="" />
//             <img src={back2} width="200px" height="200px" alt="" />
//             <img src={back3} width="200px" height="200px" alt="" />
//           </div>
//         </div>
//         <div className='head'>
//           <h1>
//             Birthday Parties
//           </h1>
//           <div
//             class="images"
//             style={{
//               padding: "20px",
//               display: "flex",
//               justifyContent: "flex-end",
//               alignItem: "center",
//               gap: "10px",
//             }}
//           >
//             <img src={img4} width="200px" height="200px" alt="" />
//             <img src={img5} width="200px" height="200px" alt="" />
//             <img src={img6} width="200px" height="200px" alt="" />
//           </div>
//         </div>
//       </div>
//       <div className='head2'>
//          <h1 style={{ textAlign: "center", color: "white" }}>Food</h1>
//    <div class="images" style={{
//             padding: "20px",
//             display: "flex",
//             justifyContent: "center",
//             alignItem: "center",
//             gap: "10px",
//           }}
//         >
//           <img src={img7} width="200px" height="200px" alt="" />
//           <img src={img8} width="200px" height="200px" alt="" />
//           <img src={img9} width="200px" height="200px" alt="" />
//         </div>
//       </div>
//     </div>
   
// </div>
// <div>
//   <div className='end-part' >
//       <h1 >Follow Us On Instagram</h1>
//       <FontAwesomeIcon icon={faInstagram}/>
//       <h2>@tictacs</h2>
//       </div>
// </div>
// </>
//   );
// }
// export default AboutUs;
