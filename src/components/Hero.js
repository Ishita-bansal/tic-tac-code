import React from 'react';
import './style.css';
import video from './images/tictacs.mp4'
function Hero(){
  return(
    <div className='hero'>
       <div className='overlay'></div>
           <video autoPlay loop muted className='background-video'>
              <source src={video} type='video/mp4' />
           </video>
          <div className='hero-content'>
            <h1 className='anim'>Welcome To Tic Tacs</h1>
            <p className='anim'>Eat , Drink , Play</p>
            <button href='/' className='hero-btn  anim'>Meet Us</button>
            </div>
      </div>

  )
}

export default Hero;