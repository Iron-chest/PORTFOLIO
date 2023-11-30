import data from "../../data/index.json";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Tilt } from 'react-tilt'

export default function MySkills() {
  useEffect(()=>{
    AOS.init();
  },[])

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          10000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
           <Tilt options={defaultOptions} >
          <div data-aos="fade-left"  data-aos-duration='1000' key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img  src={item.src} alt="Product Chain" />
    
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
          </Tilt>

        ))}
      </div>
    </section>
  );
}
