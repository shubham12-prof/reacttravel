import React,{useEffect} from 'react';
import Card from "./Card";
import "aos/dist/aos.css"
import Aos from "aos";
import './Sdata.css';


const Sdata= () => {
    useEffect(() => {
        Aos.init({duration:2000});
      }, [])
return(
<div className ="card">
<h1 className="card-head">
EXPLORE TOP DESTINATION
</h1>
<div className="card">
    <div className ="Sdata">
        <Card 
        imageUrl= {process.env.PUBLIC_URL +"/Images/one.jpg" }
        sname="SOLANG VALLEY"
        text="Solang Valley derives its name from combination of words Solang and Nallah. It is a side valley at the top of the Kullu Valley in Himachal Pradesh,"
        Price="16000" 
        />
        <Card 
        imageUrl= {process.env.PUBLIC_URL +"/Images/two.jpg" }
        sname="KEDARKANTHA"
        text="Kedarkantha is a mountain peak of the Himalayas in Uttarakhand, India. Its elevation is 12,500 ft."
        Price="12000" 
        />
         <Card 
         imageUrl= {process.env.PUBLIC_URL +"/Images/three.jpg" }
        sname="AGRA"
        text="Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 210 kilometres south of the national capital New Delhi."
        Price="10000" 
        />
         <Card 
         imageUrl= {process.env.PUBLIC_URL +"/Images/four.jpg" }

        sname="DAYARA BUGYAL"
        text="Dayara Bugyal is a Bugyal (Himalayan Alpine Meadow) in the Uttarkashi district of Uttarakhand. Dayara Bugyal is a popular Trekking and Camping Destination."
        Price="11000" 
        />
         <Card 
         imageUrl= {process.env.PUBLIC_URL +"/Images/five.jpg" }
        sname="VALLEY OF FLOWERS"
        text="Valley of Flowers National Park is an Indian national park, located in North Chamoli and Pithoragarh, in the state of Uttarakhand and is known for its meadows."
        Price="15000" 
        />
         <Card 
         imageUrl= {process.env.PUBLIC_URL +"/Images/six.jpg" }
        sname="GOVINDGHAT"
        text="Govindghat is a town in Chamoli district, Uttarakhand, India, located at the confluence of the Alaknanda and Lakshman Ganga rivers"
        Price="13000" 
        />
         <Card 
         imageUrl= {process.env.PUBLIC_URL +"/Images/seven.jpg" }
        
        sname="MANIKARAN"
        text="Manikaran is located in the Parvati Valley on river Parvati, northeast of Bhuntar in the Kullu District of Himachal Pradesh."
        Price="9000" 
        />
         <Card 
         imageUrl= {process.env.PUBLIC_URL +"/Images/eight.jpg" }
        sname="KHEERGANGA"
        text="Kheerganga is infamous for the marijuana that grows here which is known as 'charas'. Kheerganga is a favourite with the hippies and off late, it has become popular with the Israelis."
        Price="8000" 
        />
         <Card 
         imageUrl= {process.env.PUBLIC_URL +"/Images/nine.jpg" }
        sname="TOSH"
        text="Tosh village is in Himachal Pradesh state of India. It is located at about 2,400 metres in elevation on a hill near Kasol in the Parvati Valley, surrounded by mountains"
        Price="9000" 
        />
         <Card 
         imageUrl= {process.env.PUBLIC_URL +"/Images/ten.jpg" }
         sname="SANKRI"
        text="Sankri is at a distance of 200 km from Dehradun, the capital city of Uttarakhand and it takes around 7-10 hours to reach Sankri from Dehradun by road depending on the mode of transportation."
        Price="6000" 
        />
         <Card 
         imageUrl= {process.env.PUBLIC_URL +"/Images/eleven.jpg" }
        sname="KEDARKANTHA"
        text="Kedarkantha is a mountain peak of the Himalayas in Uttarakhand, India. Its elevation is 12,500 ft. Kedarkantha is located within Govind Wildlife Sanctuary in Uttarkashi district."
        Price="12000" 
        />
</div>
</div>
<div className="tour-footer">
<h2 className="footer-tour">Over the course of my life I've been to lots of places. Shadowed places where things have gone wrong. Sinister places where things still are. I always hate the sunlit towns, full of newly built developments with double-car garages in shades of pale eggshell, surrounded by green lawns and dotted with laughing children. Those towns aren't any less haunted than the others. They're just better liars.”
<br />
<span>― Kendare Blake, Anna Dressed in Blood 
</span></h2>
<img data-aos="flip-left" src={process.env.PUBLIC_URL +"/Images/two.jpg" }/>
</div>
</div>
)
}
export default Sdata;