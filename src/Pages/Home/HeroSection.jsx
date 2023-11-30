
// importing aos 
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Tola from '../../img/tolani1-removebg-preview.png'
import { Link } from 'react-scroll';
import { Tilt } from 'react-tilt'

export default function HeroSection() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <section   id="heroSection" className="hero--section">
      <div data-aos="fade-in"  data-aos-duration='1000'   className="hero--section--content--box">
        <div className="hero--section--content">
          <p   className="section--title">Hey, I'm Akintayo Tolani</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">DevOps</span>{" "}
            <br />
            Engineer
          </h1>
          <p   className="hero--section-description">
          As a budding DevOps enthusiast, I'm diving headfirst into the world of orchestrating seamless collaboration, automating deployment pipelines, and optimizing infrastructure. My journey as a beginner is fueled by a passion for accelerating software delivery and ensuring robust system reliability. Join me as I embark on this exciting adventure of mastering the art of DevOps.  <br /> 
          </p>
        </div>

        <Link
              
        
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
             
            >
           <button  style={{marginTop:"3em"}} className="btn btn-primary">Get In Touch</button>
            </Link>
          
   
       
      </div>

      <div className="hero--section--img">
        <img src={Tola} alt="Hero Section" />

      </div>
    </section>
  );
}
