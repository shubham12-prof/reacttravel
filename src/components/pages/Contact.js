import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Contact.css';
class Contact extends Component {
    render(){
    return (
        <>
        <div className="contact">
        <Map google={this.props.google} zoom={10}>
         <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
 </InfoWindow>
</Map>

        </div>
        <div className="text">
    <div className="text-item">
        <h1>
            START YOUR JOURNEY!
        </h1>
        <p>
        Let us curate an inspiring experience as you enjoy a personally-themed adventure with a professional guide catered to your interests. Whether a one-day trip or multi-trip journey, you’ll be privileged to enjoy this ultimate luxury to explore Europe with an expert, as well as the unique bird’s eye views from a helicopter in Europe, including Rome, the Dalmation Coast, Paris, Prague and 20 top destinations.
        </p>
    </div>
    <div className="text-item1">
        <p><i class="fas fa-arrow-right"></i>First Class Flights </p>
        <p><i class="fas fa-arrow-right"></i>5 Star Accommodations</p>
        <p><i class="fas fa-arrow-right"></i> Inclusive Packages</p>
        <p><i class="fas fa-arrow-right"></i>Latest Model Vehicles</p>
        <p><i class="fas fa-arrow-right"></i>Handpicked Hotels</p>
        <p><i class="fas fa-arrow-right"></i>Accesibility managment</p>
    </div>
 </div>
     </>
    );
}
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBkHI_wPiwPEBR9i37Lllv0ewwtoK5qXVo")
  })(Contact)