import React from 'react'
import './Footer.css'
export const Footer = () => {
    return (
<div className="footer">
  	 <div className="container-footer">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Explore</h4>
  	 			<ul>
  	 				<li><a href="">about us</a></li>
  	 				<li><a href="">contact</a></li>
  	 				<li><a href="">tours</a></li>
  	 				<li><a href="">services</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>office</h4>
				   <h4>
					   HARIDWAR , UTTRAKHAND , INDIA,
					   PIN-CODE:249407 
					   <br />
					   contact-no:123456789
					   company-name:foryou
				   </h4>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </div>
    )
}

export default Footer