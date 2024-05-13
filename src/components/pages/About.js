import React,{useEffect} from 'react'
import './About.css';
import Aos from "aos";
import "aos/dist/aos.css"
function About() {
    useEffect(() => {
        Aos.init({duration:1000});
      }, [])
    return (
        <div className="about">        
          <div className="about-text">
          <h1 data-aos="fade-up">
              Let's Connect
          </h1>
          <p data-aos="fade-up"> How can we help? 
              We look forward to speaking with you.
              Send us a message, 
              and we will be in touch within
              a business day.
          </p>
          </div>
          <form data-aos="zoom-in-left">
              <label> 
                  <input type="text"
                   name ="name" placeholder ="Name"  />
                
                  <input type="text" value="Email"
                  placeholder="Email" />
                  <input type="text" value="How can we help"
                  placeholder="How can we help" />
              </label>
              <div>
              <br />
            <button className="about-btn">
         <input type="submit" value="submit"
              placeholder="Submit">
              </input>
              </button>
              </div>
          </form>
          <div data-aos="fade-up" className="about-ways">
            <h1> More ways to connect</h1>
          </div>
          <div data-aos="fade-up" className="about-type">
            <div className="first">
                <h2>E-mail</h2>
                <p> myidea@foryou.com</p>
            </div>
            <div className="first">
                <h2>Phone-No</h2>
                <p>1234567890</p>
            </div>
            <div className="social-media">
            <h2>Social media</h2>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-facebook-square"></i>
            </div>
          </div>
          <div data-aos="fade-up" className= "about-img" >
            <img alt='aboutimg' src={process.env.PUBLIC_URL +"/Images/two.jpg" } 
                placeholder=" hello"
            />
          </div>
        </div>
    )
}
 
export default About;
