import React, { useRef, useEffect } from "react";


export default function HeroSection(){
    return (
    <header className="hero">
     

      <div className="container hero-flex">
        <div className="hero-content">
          <h1 className="title_hero">A modern publishing platform</h1>
          <p className="hero_text">
           Grow your audience and build your online brand
          </p>
          {/* <Link to="/podcasts" className="btn btn_hero">
              Check our Podcasts
           </Link> */}

             <div className="second_part_navigation hero_btn">
               <a href="#" class="sign-up__btn">Start for Free</a>
            <a href="#" class="login">Learn More</a>
           

             </div>
          
        </div>
         {/* <div className="hero-image-wrapper">
           <img src="/images/logo.png" className="hero-image" alt="hero" /> 
         </div> */}
         
      </div>
{/*       */}
    </header>
  );
}

