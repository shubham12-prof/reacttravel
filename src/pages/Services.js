import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import'./Services.css';
const Services = () => {

    useEffect(() => {
        Aos.init({duration:2000});
      }, [])
    
    return (
        <div className="service-card">
            <h1>
            We proposed to you
            </h1>
            <div data-aos="fade-down" className="all-card">
            <div data-aos="fade-down" className ="card-diff">
            <img data-aos="flip-left" src={process.env.PUBLIC_URL +"/Images/S8.JPG" }/>
            <h2 > MOUNTAINS TOURS </h2>
                <p>Is mountaineering in your blood?
                 Get a tour to Andes or Himalayas.
                </p>
            <button >
             <a href =" "><h2>READ MORE</h2></a>  
            </button>    
            </div>
            <div className ="card-diff">
            <img data-aos="flip-left" src={process.env.PUBLIC_URL +"/Images/S1.jpg" }/>
            <h2> SEA TOURS </h2>
                <p>Bath in any ocean thanks to the line of special exotic water tours.
                </p>
                <button >
             <a href =" "><h2>READ MORE</h2></a>  
            </button> 
            </div>
            <div className ="card-diff">
            <img data-aos="flip-left" src={process.env.PUBLIC_URL +"/Images/S2.jpg" }/>
            <h2>CRUISES TOURS </h2>
                <p>A cruise liner will provide you with all your special needs throughout your journey.
                </p>
                <button >
             <a href =" "><h2>READ MORE</h2></a>  
            </button> 
            </div>
            <div className ="card-diff">
            <img data-aos="flip-left" src={process.env.PUBLIC_URL +"/Images/S3.jpg" }/>
            <h2>SAFARI TOURS </h2>
                <p>Go through the cradle of civilization - mother Africa and its gorgeous untouched nature.
                </p>
                <button >
             <a href =" "><h2>READ MORE</h2></a>  
            </button> 
            </div>
            <div className ="card-diff">
            <img data-aos="flip-left" src={process.env.PUBLIC_URL +"/Images/S4.jpg" }/>
            <h2>EURO TOURS </h2>
                <p>Are you a gourmet? Then you should definitely check out one of our food roots!
                </p>
                <button >
             <a href =" "><h2>READ MORE</h2></a>  
            </button> 
            </div>
            <div className ="card-diff">
            <img data-aos="flip-left" src={process.env.PUBLIC_URL +"/Images/S5.jpg" }/>
            <h2> HONEYMOON TOURS</h2>
                <p>Spend your first days as a married couple at any place all over the world.
                </p>
                <button >
             <a href =" "><h2>READ MORE</h2></a>  
            </button> 
            </div>
            </div>
            <div className="service-footer">
            <img src={process.env.PUBLIC_URL +"/Images/S7.jpg" }/>
                <h1>
                Life is a journey, enjoy the trip. Aim for the sky, but move slowly, enjoying every step along the way. It is all those little steps that make the journey complete. The journey is a reward. Stay patient and trust your journey. Life is about the journey, not about the destination. Life is a journey, travel it well. ‘Life is about the journey quote. 
                </h1>
            </div>
        </div>
    )
}

export default Services;