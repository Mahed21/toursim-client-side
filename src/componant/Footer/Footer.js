import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-3">
            <div className="container">

            
            <div className="row">
                <div className="col-lg-4">
                 
                    <h3>Information</h3>
                    <h5>About us</h5>
                    <h5>More Serarch</h5>
                    <h5>Blog</h5>
                    <h5>events</h5>
                 </div>
                 <div className="col-lg-4">
                  <h3>Contact us</h3>
                  <br/>
                   <h5><i class="fas fa-envelope-open-text"></i> : mahed@255261@gmail.com</h5>
                 <h5><i class="fas fa-phone-volume"></i> :01788432763245</h5>
                 </div>

                 <div className="col-lg-4">
                  <h3>Address</h3>
                  <h5>First Floor, modubon market</h5>
                 <h5> zindabazr, Sylhet</h5>
                 </div>

            </div>
            </div>
            <hr/>
           <div className=" pt-2 pb-1">
          <span className="d-flex justify-content-center">
           <i class="fab fa-facebook-square"></i>
           <i class="fab fa-instagram-square"></i>
           <i class="fab fa-google"></i>
           <i class="fab fa-twitter"></i>
           
           </span>
           <br/>
           <p className="text-center">mac torism establish at 2015</p>

                
             </div>
          
        </div>
        
    );
};

export default Footer;