import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";
import Carousel from 'react-bootstrap/Carousel';
import back1 from "./images/game1.jpeg";
import back2 from "./images/img2.jpeg";
import back3 from "./images/img3.jpeg";
import img4 from "./images/img2.jpg";
import img5 from "./images/download.jpg"
import img6 from "./images/cake.jpg";
import img7 from "./images/dish1.jpeg";
import img8 from "./images/dish2.jpeg";
import img9 from "./images/dish3.jpeg";
import img10 from "./images/dish4.jpeg";
import img11 from "./images/dish6.jpeg";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
function AboutUs() {
  return (
<> 
    <div style={{backgroundColor:"grey", width:"100%" , height:"100px"}}></div>
<div class="row mt-5" style={{backgroundColor:"#3f51b5",borderRadius:"150px"}}> 
        <div class="col-lg-12 text-center">
            <h1 style={{color:"white",fontFamily:"cursive"}}>About Us</h1>
        </div>
       <div class="col-lg-12" style={{  width:"550px" ,margin:"auto",padding:"30px",color:"white"}}>
            <p> Arcade Zone is South Florida’s newest Indoor Entertainment
                Venue.Highlights include top of the line Arcade Games, Redemption Games
                with the best selection of prizes and the newest and most modern
                location based Virtual Reality Entertainment, offering the highest level
                of customer service cleanliness and security. Fun Starts Here!!!
            </p>
       </div>
    <div class="row minor">
       <div class="col-6 ">
       <h1 style={{ textAlign: "left",marginLeft:"250px" , color: "white" }}>Fun Games</h1>
          <div class='row p-4 sub-minor'>
             <div class="col-4"><img src={back1} width="200px" height="200px" alt="" /></div>
            <div class="col-4"><img src={back2} width="200px" height="200px" alt="" /></div>
            <div class="col-4"> <img src={back3} width="200px" height="200px" alt="" /></div>
            </div>
       </div>
      
      <div class="col-6 sub-">
      <h1 style={{ textAlign: "right",marginRight:"250px" , color: "white" }}>Birthday Parties</h1>
      <div class="row p-4 sub-minor">
          <div class="col-4"><img src={img4} width="200px" height="200px" alt="" /></div>
          <div  class="col-4"><img src={img5} width="200px" height="200px" alt="" /></div>
          <div class="col-4"><img src={img6} width="200px" height="200px" alt="" /></div>
      </div>    
      </div>
    </div> 
    <div class="row">
       <div class="col-12 ">
          <h1 style={{ textAlign: "center", color: "white" }}>Food</h1>
        <div class="col-6 d-flex justify-content-center align-items-center" style={{width:"100%"}}>
          <div class="row p-4">
              <div class="col-4 "><img src={img7} width="200px"  height="200px" alt="" /></div>
              <div class="col-4 "><img src={img8} width="200px"  height="200px" alt="" /></div>
              <div class="col-4 "><img src={img9} width="200px"  height="200px" alt="" /></div>
            </div>      
          </div>
       </div>
    </div>
</div> 
<div class="row">
    <div class="col-lg-12 d-flex flex-column p-5 ">
      <h1 style={{textAlign:"center"}}>Follow Us On Instagram</h1>
      <FontAwesomeIcon icon={faInstagram}/>
      <h2 style={{textAlign:"center"}}>@tictacs</h2>
    </div>
</div> 
 <div class="Container fluid">
    <div class="row">
        <div class="col">
          <Carousel>
              <Carousel.Item interval={500}>
                <img src={img7}  alt="img" className='d-block w-100' />
              </Carousel.Item>
              <Carousel.Item  interval={500}>
                <img src={img8}  alt="img"  className='d-block w-100'/>
              </Carousel.Item>
              <Carousel.Item  interval={500}>
                <img src={img10}  alt="img" className='d-block w-100'/>
              </Carousel.Item>
              <Carousel.Item  interval={500}>
                <img src={img11}  alt="img" className='d-block w-100'/>
              </Carousel.Item>
          </Carousel>
        </div>
    </div>
 </div>
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
