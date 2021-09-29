import React,{useEffect} from 'react'
import './Home.css'
import Aos from "aos";
import "aos/dist/aos.css"
const Home = () => {
    useEffect(() => {
        Aos.init({duration:2000});
      }, [])
    return (
        <div className ="container2">
        <div className="text-box">
        <p>HEY</p>
        <h1>Explore The World 
        </h1>
        {/* <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptatem, assumenda saepe nisi quis tenetur consectetur similique ipsa soluta provident nostrum.
        </h3> */}

        <div data-aos="fade-up" className="row">
        <a href="/Tours">Explore</a>
        <a href="Contact">Connect with Me
        <span>
        &#8594;
        </span></a>
        <span data-aos="fade-up">
            You can Explore
            More About My Portfolio And
            <br /> 
            Personal Life
            Experince.
        </span>
        </div>
        </div>
        <div className="text-box2">
        <h1>
        Explore a different way to travel
        </h1>

        <img src= {process.env.PUBLIC_URL +"/Images/Home1.JPG" } alt=" first"/>
        <p data-aos="fade-up">
         Discover new cultures and have a wonderful rest with Backpack Story! Select the country you’d like to visit and provide our agents with estimated time – they’ll find and offer the most suitable tours and hotels.
        <br />
        During our work we organized countless journeys for our clients. We started as a small tour bureau, and soon we expanded our offers list. Today we have valuable experience travelling and we can advise the most stunning resorts, cities and countries to visit!
        </p>
    </div>
    <div data-aos="fade-up" className="text-box3">
    <img data-aos="fade-up" className="image3" src={process.env.PUBLIC_URL +"/Images/Home2.JPG" }/>
        <p data-aos="fade-up">
        Travel early and travel often. Live abroad, if you can. Understand cultures other than your own. As your understanding of other cultures increases, your understanding of yourself and your own culture will increase exponentially.
        </p>
    </div>
    <div data-aos="fade-up" className="row1">
        <div className="row-data">
        <h1>
            01.BEST HOTELS
        </h1>
        <p>
        We guarantee the best hotels and very comfortable rooms, which will be appreciated by every traveller. You will be absolutely happy with the hotel and will have a wonderful vacation there.
        </p>
        </div>
        <div className="row-data">
        <h1>
            02. TOUR GUIDE 
        </h1>
        <p>
        We provide our clients with such a service as Tourist Guide. Its main goal is to ensure people with all necessary information any time he needs. This service is similar to Customer Support with emphasis on travelling.        </p>
        </div>
        <div className="row-data">
        <h1>
        03. FLIGHTS TICKETS
        </h1>
        <p>
        You can book tickets on any plane online via our booking system. Here you have an opportunity to select your transport operator. Our representatives will help you with the details.        </p>
        </div>
    </div>
    <div className="gallery">
    <div className="gallery-item1">
    <img src={process.env.PUBLIC_URL +"/Images/one.jpg" } title="" alt="solang valley"/>
    </div>
    <div className="gallery-item2">
    <img src={process.env.PUBLIC_URL +"/Images/two.jpg" } alt="kedarkantha"/>
    </div>
    <div className="gallery-item3">
    <img src={process.env.PUBLIC_URL +"/Images/three.jpg" } alt="agra" />
    </div>
    <div className="gallery-item4">
    <img src={process.env.PUBLIC_URL +"/Images/four.jpg" } alt="dayarabugyal"/>
    </div>
    </div>
    <div className="text">
    <div className="text-item">
        <h1 data-aos="fade-up">
            START YOUR JOURNEY!
        </h1>
        <p data-aos="fade-up">
        Let us curate an inspiring experience as you enjoy a personally-themed adventure with a professional guide catered to your interests. Whether a one-day trip or multi-trip journey, you’ll be privileged to enjoy this ultimate luxury to explore Europe with an expert, as well as the unique bird’s eye views from a helicopter in Europe, including Rome, the Dalmation Coast, Paris, Prague and 20 top destinations.
        </p>
    </div>
    <div data-aos="fade-up" className="text-item1">
        <p><i class="fas fa-arrow-right"></i>First Class Flights </p>
        <p><i class="fas fa-arrow-right"></i>5 Star Accommodations</p>
        <p><i class="fas fa-arrow-right"></i> Inclusive Packages</p>
        <p><i class="fas fa-arrow-right"></i>Latest Model Vehicles</p>
        <p><i class="fas fa-arrow-right"></i>Handpicked Hotels</p>
        <p><i class="fas fa-arrow-right"></i>Accesibility managment</p>
    </div>
 </div>

    </div>
    )

}
export default Home;