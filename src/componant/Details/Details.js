import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const {tourId}=useParams();
    console.log(tourId);
   
    const [detail,setDetail]=useState({});
    
    useEffect(()=>
    {
        fetch(`http://localhost:5000/products/${tourId}`)
        .then(res=>res.json())
        .then(data=>setDetail(data));
       
    },[])
  
    return (
      
        <div className="container">
            <div className="row mt-2 mb-2">
                <div className="col-lg-6 overview">
                    <div className="mt-3">
                    <h6>we mac torism limited is here to give services of all people to visit 
                    all over the country with safety</h6>
                    <h4>{detail.name}</h4>
                    <h4>{detail.duration}</h4>
                    <h4>{detail.date}</h4>
                    <h4>{detail.cost}</h4>
                    <button class="btn mt-2">Book Now</button>
                    </div>

                </div>
                <div className="col-lg-6">
                 <img src={detail.img} alt="" class="img-fluid"/>
                </div>
            </div>
            <div className="row row cols-lg-4 mt-3 mb-3">
                <div className="col">
                <img src={detail.img1} alt="" class="img-fluid"/>
                </div>
                <div className="col">
                <img src={detail.img2} alt="" class="img-fluid"/>
                </div>
                <div className="col">
                <img src={detail.img3} alt="" class="img-fluid"/>
                </div>

            </div>

        </div>
           
       
    );
};

export default Details;