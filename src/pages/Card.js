import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import './Card.css'
function Card({imageUrl,sname,Price,text,http}){

  useEffect(() => {
    Aos.init({duration:2000});
  }, [])

return ( 
  <div className="card-item">
  <div data-aos="fade-up" className="card-image">
  <img src={imageUrl} alt="" />
  </div>
  <div data-aos="fade-up" className="card-content">
      <div className="card-name">
      <h2>{sname}</h2>
      </div>
    <div data-aos="fade-up" className="card-price">
   <p>price ------ {Price}</p>
   <div className="card-text">
      <p>{text}</p>
   </div>
    </div>
    </div>
    <div className="btn">
    <button>
    <a href="">
        View More
    </a>
    </button>
    </div>
    </div>
)
}

export default Card;