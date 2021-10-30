import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">

            
            <div className="row">
                <div className="col-lg-4">
                 
                        <h3>Information</h3>
                        <br/>
                        <h4>About us</h4>
                        <h4>More Serarch</h4>
                        <h4>Blog</h4>
                        <h4>events</h4>
                 </div>
                 <div className="col-lg-4">
                  <h3>Contact us</h3>
                  <br/>
               
                 <h4><i class="fas fa-envelope-open-text"></i> : mahed@255261@gmail.com</h4>
                 <h4><i class="fas fa-phone-volume"></i> :01788432763245</h4>
                 
                 </div>

                 <div className="col-lg-4">
                  <h3>Address</h3>
                  <br/>
               
                 <h4>First Floor, modubon market</h4>
                 <h4> zindabazr, Sylhet</h4>
               
                 
                 </div>

            </div>
            </div>
            <hr/>
           <div className=" pt-5 pb-1">
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